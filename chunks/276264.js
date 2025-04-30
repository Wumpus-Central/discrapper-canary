n.d(t, {
    Z: () => z,
    x: () => G
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(477690),
    c = n(481060),
    u = n(420660),
    d = n(468363),
    f = n(326255),
    _ = n(956221),
    p = n(747017),
    h = n(385499),
    m = n(693728),
    g = n(554300),
    E = n(558602),
    b = n(172751),
    y = n(736144),
    O = n(884902),
    v = n(113434),
    I = n(569984),
    S = n(553393),
    T = n(518950),
    A = n(594174),
    N = n(709586),
    C = n(624138),
    R = n(51144),
    P = n(981631),
    w = n(674563),
    D = n(524484),
    L = n(388032),
    x = n(938159);
function M(e, t, n) {
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
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = (0, C.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    B = 3,
    V = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(c.ua7, {
                  text: null != i ? i : L.intl.string(L.t.pclUFB),
                  children: (e) =>
                      (0, r.jsx)(
                          c.CEn,
                          U(
                              k(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  e
                              ),
                              { className: x.ownerIcon }
                          )
                      )
              })
            : null;
    }),
    F = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(c.ua7, {
                  text: L.intl.formatToPlainString(L.t.IWkAq6, { date: t }),
                  children: (e) =>
                      (0, r.jsx)(c.P3F, {
                          onClick: n,
                          tabIndex: -1,
                          children: (0, r.jsx)(N.Z, U(k({}, e), { className: x.premiumIcon }))
                      })
              });
    }),
    Z = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = t.isClyde() ? w.Hb.AI : w.Hb.BOT;
        return (0, r.jsx)(h.Z, {
            className: x.botTag,
            type: n,
            verified: t.isVerifiedBot()
        });
    }),
    H = i.memo(function (e) {
        let { user: t, isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: o, premiumSince: a, onClickPremiumGuildIcon: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(Z, { user: t }),
                (0, r.jsx)(V, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: o
                }),
                (0, r.jsx)(F, {
                    premiumSince: a,
                    onClickPremiumGuildIcon: s
                })
            ]
        });
    }),
    Y = i.memo(function (e) {
        let { colorRoleName: t, colorString: n, name: i, roleColorStrings: o, hideClanTag: a, user: s, guildId: l, isHovering: u } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.PUh, {
                    roleName: t,
                    color: null != n ? n : void 0,
                    name: i,
                    className: x.name,
                    roleColors: o,
                    animateRoleGradient: u
                }),
                !a &&
                    (0, r.jsx)(b.ZP, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: x.clanTag
                    })
            ]
        });
    }),
    W = i.memo(function (e) {
        let { user: t, shouldAnimateStatus: n, activities: i, status: o, eventHandlers: a, avatarSrc: s, isMobile: l, isTyping: d, avatarDecorationSrc: f, handleSetTypingRef: _, typingRef: p, currentUser: h } = e,
            m = o === P.Skl.OFFLINE,
            g = n ? c.Xo$ : c.qEK,
            E = (0, u.Z)(i) ? P.Skl.STREAMING : o;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        U(k({}, a), {
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
                    (0, r.jsx)(y.Z, {
                        confettiSpawnRef: p,
                        shouldFire: d && null != h && t.id !== h.id,
                        confettiLocation: D.Hn.MEMBER_USER
                    })
                ]
            })
        );
    }),
    K = i.memo(function (e) {
        let { hideSubtext: t, hideTooltip: n = !1, activities: o, status: a, applicationStream: s, voiceStatusChannel: l, user: c, channel: u, isHovering: d, quest: _ } = e,
            h = i.useMemo(
                () =>
                    (0, f.Z)({
                        activities: o,
                        status: a,
                        applicationStream: s,
                        voiceChannel: l
                    }),
                [o, a, s, l]
            ),
            m = i.useMemo(
                () =>
                    !(0, E.Z)({
                        activity:
                            null == o
                                ? void 0
                                : o.find((e) => {
                                      let { type: t } = e;
                                      return t === P.IIU.CUSTOM_STATUS;
                                  }),
                        user: c,
                        channel: u
                    }),
                [o, c, u]
            );
        return t || !h
            ? null
            : (0, r.jsx)(p.Z, {
                  user: c,
                  activities: o,
                  applicationStream: s,
                  voiceChannel: l,
                  animate: d,
                  hideEmoji: m,
                  hasQuest: null != _,
                  hideTooltip: n
              });
    }),
    z = i.memo(function (e) {
        var t;
        let { selected: n = !1, colorString: o, colorStrings: l, colorRoleName: u, isOwner: f, ownerTooltipText: p, lostPermissionTooltipText: h, isTyping: E = !1, nick: b, user: y, currentUser: N, activities: C, applicationStream: w, status: D, shouldAnimateStatus: L = !1, isMobile: M, premiumSince: j, channel: G, guildId: V, className: F, nameplate: Z, hideClanTag: z = !1, hideSubtext: q = !1, hideTooltip: Q = !1, onMouseDown: X, onKeyDown: J, onClick: $, onContextMenu: ee, onClickPremiumGuildIcon: et, onFocus: en, 'aria-controls': er, 'aria-expanded': ei, 'aria-posinset': eo, 'aria-setsize': ea, id: es, tabIndex: el, itemProps: ec } = e,
            eu = null == y ? void 0 : y.id,
            ed = R.ZP.useName(y),
            ef = (null == (t = A.default.getCurrentUser()) ? void 0 : t.id) === eu,
            e_ = i.useRef(null),
            [ep, eh] = i.useState(!1),
            [em, eg] = i.useState(null),
            { voiceChannel: eE } = (0, _.Z)({
                userId: eu,
                guildId: V
            }),
            { voiceActivityStatusEnabled: eb } = (0, d.U)({ location: 'MemberListItem' }),
            ey = eb ? eE : void 0,
            {
                avatarDecorationSrc: eO,
                avatarSrc: ev,
                eventHandlers: eI
            } = (0, T.Z)({
                user: y,
                size: c.EFr.SIZE_32,
                animateOnHover: !(n || ep),
                guildId: V
            }),
            eS = (0, O.X)(V, l),
            eT = (0, s.e7)([I.Z], () => null != I.Z.questEnrollmentBlockedUntil, []),
            [eA, eN] = i.useState(!1);
        i.useEffect(() => {
            n && eN(!1);
        }, [n]);
        let eC = (0, v.fN)(C),
            eR = null != eC && !ef && n && !eA,
            eP = i.useCallback(() => {
                eh(!0);
            }, []),
            ew = i.useCallback(() => {
                eh(!1);
            }, []),
            eD = i.useCallback((e) => {
                eg(e);
            }, []),
            eL = i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        S.Z,
                        U(
                            k(
                                {
                                    quest: eC,
                                    memberListItemRef: e_,
                                    applicationStream: w,
                                    isQuestEnrollmentBlocked: eT
                                },
                                e
                            ),
                            { closePopout: () => eN(!0) }
                        )
                    ),
                [eC, e_, w, eT]
            );
        return null == y
            ? (0, r.jsx)(m.Z, {
                  avatarSize: c.EFr.SIZE_32,
                  className: x.placeholder
              })
            : (0, r.jsx)(c.yRy, {
                  targetElementRef: e_,
                  renderPopout: eL,
                  position: 'bottom',
                  shouldShow: eR,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.yRy.Animation.NONE,
                  spacing: -B,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          k(
                              {
                                  ref: e_,
                                  selected: n,
                                  className: a()(x.member, F, {
                                      [x.offline]: D === P.Skl.OFFLINE && !n,
                                      [x.flatBottom]: eR
                                  }),
                                  innerClassName: x.memberInner,
                                  onClick: $,
                                  onKeyDown: J,
                                  onMouseDown: X,
                                  onContextMenu: ee,
                                  onMouseEnter: eP,
                                  onMouseLeave: ew,
                                  hovered: ep,
                                  name:
                                      null == h
                                          ? (0, r.jsx)('span', {
                                                className: x.username,
                                                children: (0, r.jsx)(Y, {
                                                    colorRoleName: u,
                                                    colorString: o,
                                                    name: null != b ? b : ed,
                                                    roleColorStrings: eS,
                                                    hideClanTag: z,
                                                    user: y,
                                                    guildId: V,
                                                    isHovering: ep
                                                })
                                            })
                                          : (0, r.jsx)(c.ua7, {
                                                text: h,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        U(k({}, e), {
                                                            className: a()(x.username, x.lostPermission),
                                                            children: (0, r.jsx)(Y, {
                                                                colorRoleName: u,
                                                                colorString: o,
                                                                name: null != b ? b : ed,
                                                                roleColorStrings: eS,
                                                                hideClanTag: z,
                                                                user: y,
                                                                guildId: V,
                                                                isHovering: ep
                                                            })
                                                        })
                                                    )
                                            }),
                                  avatar: (0, r.jsx)(W, {
                                      user: y,
                                      shouldAnimateStatus: L,
                                      activities: C,
                                      status: D,
                                      eventHandlers: eI,
                                      avatarSrc: ev,
                                      isMobile: M,
                                      isTyping: E,
                                      avatarDecorationSrc: eO,
                                      handleSetTypingRef: eD,
                                      typingRef: em,
                                      currentUser: N
                                  }),
                                  nameplate: Z,
                                  subText: (0, r.jsx)(K, {
                                      hideSubtext: q,
                                      activities: C,
                                      status: D,
                                      applicationStream: w,
                                      voiceStatusChannel: ey,
                                      user: y,
                                      channel: G,
                                      isHovering: ep,
                                      quest: eC,
                                      hideTooltip: Q
                                  }),
                                  decorators: (0, r.jsx)(H, {
                                      user: y,
                                      isOwner: f,
                                      lostPermissionTooltipText: h,
                                      ownerTooltipText: p,
                                      premiumSince: j,
                                      onClickPremiumGuildIcon: et
                                  }),
                                  'aria-controls': er,
                                  'aria-expanded': ei,
                                  'aria-setsize': ea,
                                  'aria-posinset': eo,
                                  id: es,
                                  tabIndex: el,
                                  onFocus: en,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4
                                      }
                                  }
                              },
                              ec
                          )
                      )
              });
    });

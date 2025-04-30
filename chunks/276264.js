n.d(t, {
    Z: () => z,
    x: () => G
}),
    n(388685);
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
        let { user: t, isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a, premiumSince: o, onClickPremiumGuildIcon: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(Z, { user: t }),
                (0, r.jsx)(V, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a
                }),
                (0, r.jsx)(F, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s
                })
            ]
        });
    }),
    Y = i.memo(function (e) {
        let { colorRoleName: t, colorString: n, name: i, roleColorStrings: a, hideClanTag: o, user: s, guildId: l, isHovering: u } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.PUh, {
                    roleName: t,
                    color: null != n ? n : void 0,
                    name: i,
                    className: x.name,
                    roleColors: a,
                    animateRoleGradient: u
                }),
                !o &&
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
        let { user: t, shouldAnimateStatus: n, activities: i, status: a, eventHandlers: o, avatarSrc: s, isMobile: l, isTyping: d, avatarDecorationSrc: f, handleSetTypingRef: _, typingRef: p, currentUser: h } = e,
            m = a === P.Skl.OFFLINE,
            g = n ? c.Xo$ : c.qEK,
            E = (0, u.Z)(i) ? P.Skl.STREAMING : a;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        U(k({}, o), {
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
        let { hideSubtext: t, activities: n, status: a, applicationStream: o, voiceStatusChannel: s, user: l, channel: c, isHovering: u, quest: d } = e,
            _ = i.useMemo(
                () =>
                    (0, f.Z)({
                        activities: n,
                        status: a,
                        applicationStream: o,
                        voiceChannel: s
                    }),
                [n, a, o, s]
            ),
            h = i.useMemo(
                () =>
                    !(0, E.Z)({
                        activity:
                            null == n
                                ? void 0
                                : n.find((e) => {
                                      let { type: t } = e;
                                      return t === P.IIU.CUSTOM_STATUS;
                                  }),
                        user: l,
                        channel: c
                    }),
                [n, l, c]
            );
        return t || !_
            ? null
            : (0, r.jsx)(p.Z, {
                  user: l,
                  activities: n,
                  applicationStream: o,
                  voiceChannel: s,
                  animate: u,
                  hideEmoji: h,
                  hasQuest: null != d
              });
    }),
    z = i.memo(function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorStrings: l, colorRoleName: u, isOwner: f, ownerTooltipText: p, lostPermissionTooltipText: h, isTyping: E = !1, nick: b, user: y, currentUser: N, activities: C, applicationStream: w, status: D, shouldAnimateStatus: L = !1, isMobile: M, premiumSince: j, channel: G, guildId: V, className: F, nameplate: Z, hideClanTag: z = !1, hideSubtext: q = !1, onMouseDown: Q, onKeyDown: X, onClick: J, onContextMenu: $, onClickPremiumGuildIcon: ee, onFocus: et, 'aria-controls': en, 'aria-expanded': er, 'aria-posinset': ei, 'aria-setsize': ea, id: eo, tabIndex: es, itemProps: el } = e,
            ec = null == y ? void 0 : y.id,
            eu = R.ZP.useName(y),
            ed = (null == (t = A.default.getCurrentUser()) ? void 0 : t.id) === ec,
            ef = i.useRef(null),
            [e_, ep] = i.useState(!1),
            [eh, em] = i.useState(null),
            { voiceChannel: eg } = (0, _.Z)({
                userId: ec,
                guildId: V
            }),
            { voiceActivityStatusEnabled: eE } = (0, d.U)({ location: 'MemberListItem' }),
            eb = eE ? eg : void 0,
            {
                avatarDecorationSrc: ey,
                avatarSrc: eO,
                eventHandlers: ev
            } = (0, T.Z)({
                user: y,
                size: c.EFr.SIZE_32,
                animateOnHover: !(n || e_),
                guildId: V
            }),
            eI = (0, O.X)(V, l),
            eS = (0, s.e7)([I.Z], () => null != I.Z.questEnrollmentBlockedUntil, []),
            [eT, eA] = i.useState(!1);
        i.useEffect(() => {
            n && eA(!1);
        }, [n]);
        let eN = (0, v.fN)(C),
            eC = null != eN && !ed && n && !eT,
            eR = i.useCallback(() => {
                ep(!0);
            }, []),
            eP = i.useCallback(() => {
                ep(!1);
            }, []),
            ew = i.useCallback((e) => {
                em(e);
            }, []),
            eD = i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        S.Z,
                        U(
                            k(
                                {
                                    quest: eN,
                                    memberListItemRef: ef,
                                    applicationStream: w,
                                    isQuestEnrollmentBlocked: eS
                                },
                                e
                            ),
                            { closePopout: () => eA(!0) }
                        )
                    ),
                [eN, ef, w, eS]
            );
        return null == y
            ? (0, r.jsx)(m.Z, {
                  avatarSize: c.EFr.SIZE_32,
                  className: x.placeholder
              })
            : (0, r.jsx)(c.yRy, {
                  targetElementRef: ef,
                  renderPopout: eD,
                  position: 'bottom',
                  shouldShow: eC,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.yRy.Animation.NONE,
                  spacing: -B,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          k(
                              {
                                  ref: ef,
                                  selected: n,
                                  className: o()(x.member, F, {
                                      [x.offline]: D === P.Skl.OFFLINE && !n,
                                      [x.flatBottom]: eC
                                  }),
                                  innerClassName: x.memberInner,
                                  onClick: J,
                                  onKeyDown: X,
                                  onMouseDown: Q,
                                  onContextMenu: $,
                                  onMouseEnter: eR,
                                  onMouseLeave: eP,
                                  hovered: e_,
                                  name:
                                      null == h
                                          ? (0, r.jsx)('span', {
                                                className: x.username,
                                                children: (0, r.jsx)(Y, {
                                                    colorRoleName: u,
                                                    colorString: a,
                                                    name: null != b ? b : eu,
                                                    roleColorStrings: eI,
                                                    hideClanTag: z,
                                                    user: y,
                                                    guildId: V,
                                                    isHovering: e_
                                                })
                                            })
                                          : (0, r.jsx)(c.ua7, {
                                                text: h,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        U(k({}, e), {
                                                            className: o()(x.username, x.lostPermission),
                                                            children: (0, r.jsx)(Y, {
                                                                colorRoleName: u,
                                                                colorString: a,
                                                                name: null != b ? b : eu,
                                                                roleColorStrings: eI,
                                                                hideClanTag: z,
                                                                user: y,
                                                                guildId: V,
                                                                isHovering: e_
                                                            })
                                                        })
                                                    )
                                            }),
                                  avatar: (0, r.jsx)(W, {
                                      user: y,
                                      shouldAnimateStatus: L,
                                      activities: C,
                                      status: D,
                                      eventHandlers: ev,
                                      avatarSrc: eO,
                                      isMobile: M,
                                      isTyping: E,
                                      avatarDecorationSrc: ey,
                                      handleSetTypingRef: ew,
                                      typingRef: eh,
                                      currentUser: N
                                  }),
                                  nameplate: Z,
                                  subText: (0, r.jsx)(K, {
                                      hideSubtext: q,
                                      activities: C,
                                      status: D,
                                      applicationStream: w,
                                      voiceStatusChannel: eb,
                                      user: y,
                                      channel: G,
                                      isHovering: e_,
                                      quest: eN
                                  }),
                                  decorators: (0, r.jsx)(H, {
                                      user: y,
                                      isOwner: f,
                                      lostPermissionTooltipText: h,
                                      ownerTooltipText: p,
                                      premiumSince: j,
                                      onClickPremiumGuildIcon: ee
                                  }),
                                  'aria-controls': en,
                                  'aria-expanded': er,
                                  'aria-setsize': ea,
                                  'aria-posinset': ei,
                                  id: eo,
                                  tabIndex: es,
                                  onFocus: et,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4
                                      }
                                  }
                              },
                              el
                          )
                      )
              });
    });

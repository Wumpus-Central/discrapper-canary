n.d(t, {
    Z: () => W,
    x: () => j
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(477690),
    l = n(481060),
    c = n(420660),
    u = n(468363),
    d = n(326255),
    f = n(956221),
    _ = n(747017),
    p = n(385499),
    h = n(693728),
    m = n(979264),
    g = n(554300),
    E = n(558602),
    b = n(736144),
    y = n(884902),
    v = n(113434),
    O = n(553393),
    I = n(518950),
    S = n(594174),
    T = n(709586),
    A = n(624138),
    N = n(51144),
    C = n(981631),
    R = n(674563),
    P = n(524484),
    w = n(388032),
    D = n(938159);
function L(e, t, n) {
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
function x(e) {
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
let j = (0, A.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    U = 3,
    G = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(l.ua7, {
                  text: null != i ? i : w.intl.string(w.t.pclUFB),
                  children: (e) =>
                      (0, r.jsx)(
                          l.CEn,
                          k(
                              x(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  e
                              ),
                              { className: D.ownerIcon }
                          )
                      )
              })
            : null;
    }),
    B = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(l.ua7, {
                  text: w.intl.formatToPlainString(w.t.IWkAq6, { date: t }),
                  children: (e) =>
                      (0, r.jsx)(l.P3F, {
                          onClick: n,
                          tabIndex: -1,
                          children: (0, r.jsx)(T.Z, k(x({}, e), { className: D.premiumIcon }))
                      })
              });
    }),
    F = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = t.isClyde() ? R.Hb.AI : R.Hb.BOT;
        return (0, r.jsx)(p.Z, {
            className: D.botTag,
            type: n,
            verified: t.isVerifiedBot()
        });
    }),
    V = i.memo(function (e) {
        let { user: t, isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a, premiumSince: o, onClickPremiumGuildIcon: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(F, { user: t }),
                (0, r.jsx)(G, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a
                }),
                (0, r.jsx)(B, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s
                })
            ]
        });
    }),
    Z = i.memo(function (e) {
        let { colorRoleName: t, colorString: n, name: i, roleColorStrings: a, hideClanTag: o, user: s, guildId: c } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.PUh, {
                    roleName: t,
                    color: null != n ? n : void 0,
                    name: i,
                    className: D.name,
                    roleColors: a
                }),
                !o &&
                    (0, r.jsx)(m.ZP, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: c,
                        disableGuildProfile: !0,
                        className: D.clanTag
                    })
            ]
        });
    }),
    H = i.memo(function (e) {
        let { user: t, shouldAnimateStatus: n, activities: i, status: a, eventHandlers: o, avatarSrc: s, isMobile: u, isTyping: d, avatarDecorationSrc: f, handleSetTypingRef: _, typingRef: p, currentUser: h } = e,
            m = a === C.Skl.OFFLINE,
            g = n ? l.Xo$ : l.qEK,
            E = (0, c.Z)(i) ? C.Skl.STREAMING : a;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        k(x({}, o), {
                            size: l.EFr.SIZE_32,
                            src: s,
                            isMobile: u,
                            isTyping: d,
                            status: E,
                            'aria-label': t.username,
                            statusTooltip: !0,
                            avatarDecoration: f,
                            typingIndicatorRef: _
                        })
                    ),
                    (0, r.jsx)(b.Z, {
                        confettiSpawnRef: p,
                        shouldFire: d && null != h && t.id !== h.id,
                        confettiLocation: P.Hn.MEMBER_USER
                    })
                ]
            })
        );
    }),
    Y = i.memo(function (e) {
        let { hideSubtext: t, activities: n, status: a, applicationStream: o, voiceStatusChannel: s, user: l, channel: c, isHovering: u, quest: f } = e,
            p = i.useMemo(
                () =>
                    (0, d.Z)({
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
                                      return t === C.IIU.CUSTOM_STATUS;
                                  }),
                        user: l,
                        channel: c
                    }),
                [n, l, c]
            );
        return t || !p
            ? null
            : (0, r.jsx)(_.Z, {
                  user: l,
                  activities: n,
                  applicationStream: o,
                  voiceChannel: s,
                  animate: u,
                  hideEmoji: h,
                  hasQuest: null != f
              });
    }),
    W = i.memo(function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorStrings: s, colorRoleName: c, isOwner: d, ownerTooltipText: _, lostPermissionTooltipText: p, isTyping: m = !1, nick: E, user: b, currentUser: T, activities: A, applicationStream: R, status: P, shouldAnimateStatus: w = !1, isMobile: L, premiumSince: M, channel: j, guildId: G, className: B, nameplate: F, hideClanTag: W = !1, hideSubtext: K = !1, onMouseDown: z, onKeyDown: q, onClick: Q, onContextMenu: X, onClickPremiumGuildIcon: J, onFocus: $, 'aria-controls': ee, 'aria-expanded': et, 'aria-posinset': en, 'aria-setsize': er, id: ei, tabIndex: ea, itemProps: eo } = e,
            es = null == b ? void 0 : b.id,
            el = N.ZP.useName(b),
            ec = (null == (t = S.default.getCurrentUser()) ? void 0 : t.id) === es,
            eu = i.useRef(null),
            [ed, ef] = i.useState(!1),
            [e_, ep] = i.useState(null),
            { voiceChannel: eh } = (0, f.Z)({
                userId: es,
                guildId: G
            }),
            { voiceActivityStatusEnabled: em } = (0, u.U)({ location: 'MemberListItem' }),
            eg = em ? eh : void 0,
            {
                avatarDecorationSrc: eE,
                avatarSrc: eb,
                eventHandlers: ey
            } = (0, I.Z)({
                user: b,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || ed),
                guildId: G
            }),
            ev = (0, y.X)(G, s),
            [eO, eI] = i.useState(!1);
        i.useEffect(() => {
            n && eI(!1);
        }, [n]);
        let eS = (0, v.Fr)(A),
            eT = null != eS && !ec && n && !eO,
            eA = i.useCallback(() => {
                ef(!0);
            }, []),
            eN = i.useCallback(() => {
                ef(!1);
            }, []),
            eC = i.useCallback((e) => {
                ep(e);
            }, []),
            eR = i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        O.Z,
                        k(
                            x(
                                {
                                    quest: eS,
                                    memberListItemRef: eu,
                                    applicationStream: R
                                },
                                e
                            ),
                            { closePopout: () => eI(!0) }
                        )
                    ),
                [eS, eu, R]
            );
        return null == b
            ? (0, r.jsx)(h.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: D.placeholder
              })
            : (0, r.jsx)(l.yRy, {
                  targetElementRef: eu,
                  renderPopout: eR,
                  position: 'bottom',
                  shouldShow: eT,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -U,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          x(
                              {
                                  ref: eu,
                                  selected: n,
                                  className: o()(D.member, B, {
                                      [D.offline]: P === C.Skl.OFFLINE && !n,
                                      [D.flatBottom]: eT
                                  }),
                                  innerClassName: D.memberInner,
                                  onClick: Q,
                                  onKeyDown: q,
                                  onMouseDown: z,
                                  onContextMenu: X,
                                  onMouseEnter: eA,
                                  onMouseLeave: eN,
                                  hovered: ed,
                                  name:
                                      null == p
                                          ? (0, r.jsx)('span', {
                                                className: D.username,
                                                children: (0, r.jsx)(Z, {
                                                    colorRoleName: c,
                                                    colorString: a,
                                                    name: null != E ? E : el,
                                                    roleColorStrings: ev,
                                                    hideClanTag: W,
                                                    user: b,
                                                    guildId: G
                                                })
                                            })
                                          : (0, r.jsx)(l.ua7, {
                                                text: p,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        k(x({}, e), {
                                                            className: o()(D.username, D.lostPermission),
                                                            children: (0, r.jsx)(Z, {
                                                                colorRoleName: c,
                                                                colorString: a,
                                                                name: null != E ? E : el,
                                                                roleColorStrings: ev,
                                                                hideClanTag: W,
                                                                user: b,
                                                                guildId: G
                                                            })
                                                        })
                                                    )
                                            }),
                                  avatar: (0, r.jsx)(H, {
                                      user: b,
                                      shouldAnimateStatus: w,
                                      activities: A,
                                      status: P,
                                      eventHandlers: ey,
                                      avatarSrc: eb,
                                      isMobile: L,
                                      isTyping: m,
                                      avatarDecorationSrc: eE,
                                      handleSetTypingRef: eC,
                                      typingRef: e_,
                                      currentUser: T
                                  }),
                                  nameplate: F,
                                  subText: (0, r.jsx)(Y, {
                                      hideSubtext: K,
                                      activities: A,
                                      status: P,
                                      applicationStream: R,
                                      voiceStatusChannel: eg,
                                      user: b,
                                      channel: j,
                                      isHovering: ed,
                                      quest: eS
                                  }),
                                  decorators: (0, r.jsx)(V, {
                                      user: b,
                                      isOwner: d,
                                      lostPermissionTooltipText: p,
                                      ownerTooltipText: _,
                                      premiumSince: M,
                                      onClickPremiumGuildIcon: J
                                  }),
                                  'aria-controls': ee,
                                  'aria-expanded': et,
                                  'aria-setsize': er,
                                  'aria-posinset': en,
                                  id: ei,
                                  tabIndex: ea,
                                  onFocus: $,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4
                                      }
                                  }
                              },
                              eo
                          )
                      )
              });
    });

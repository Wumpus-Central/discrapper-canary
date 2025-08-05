(n.d(t, {
    Z: () => J,
    x: () => Z
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
    b = n(821795),
    y = n(892567),
    O = n(7284),
    v = n(172751),
    I = n(736144),
    T = n(884902),
    S = n(113434),
    A = n(569984),
    N = n(553393),
    C = n(518950),
    R = n(594174),
    P = n(624138),
    w = n(51144),
    D = n(981631),
    L = n(674563),
    x = n(524484),
    M = n(388032),
    k = n(938159);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            }));
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let Z = (0, P.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    H = 3,
    Y = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(c.ua7, {
                  text: null != i ? i : M.intl.string(M.t.pclUFB),
                  children: (e) =>
                      (0, r.jsx)(
                          c.CEn,
                          B(
                              U(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  e
                              ),
                              { className: k.ownerIcon }
                          )
                      )
              })
            : null;
    }),
    W = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(c.ua7, {
                  text: M.intl.formatToPlainString(M.t.IWkAq6, { date: t }),
                  children: (e) =>
                      (0, r.jsx)(c.P3F, {
                          onClick: n,
                          tabIndex: -1,
                          children: (0, r.jsx)(
                              c.$Eu,
                              B(U({}, e), {
                                  color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  className: k.premiumIcon
                              })
                          )
                      })
              });
    }),
    K = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = L.Hb.BOT;
        return (0, r.jsx)(h.Z, {
            className: k.botTag,
            type: n,
            verified: t.isVerifiedBot()
        });
    }),
    z = i.memo(function (e) {
        let { user: t, isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a, premiumSince: o, onClickPremiumGuildIcon: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(K, { user: t }),
                (0, r.jsx)(Y, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a
                }),
                (0, r.jsx)(W, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s
                })
            ]
        });
    }),
    q = i.memo(function (e) {
        let { colorRoleName: t, colorString: n, colorStrings: i, name: a, hideClanTag: o, user: s, guildId: l, isHovering: u } = e,
            d = (0, O.j)({ displayNameStyles: null == s ? void 0 : s.displayNameStyles }),
            f = null == l && (null == s ? void 0 : s.displayNameStyles) != null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f
                    ? (0, r.jsx)(y.Z, {
                          userName: null != a ? a : '',
                          displayNameStyles: s.displayNameStyles,
                          effectDisplayType: u ? b.F.ANIMATED : b.F.STATIC,
                          loop: !0
                      })
                    : (0, r.jsx)(c.PUh, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: k.name,
                          nameTextClassName: d,
                          animateRoleGradient: u
                      }),
                !o &&
                    (0, r.jsx)(v.ZP, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: k.clanTag
                    })
            ]
        });
    }),
    X = i.memo(function (e) {
        let { user: t, shouldAnimateStatus: n, activities: i, status: a, eventHandlers: o, avatarSrc: s, isMobile: l, isTyping: d, avatarDecorationSrc: f, handleSetTypingRef: _, typingRef: p, currentUser: h } = e,
            m = a === D.Skl.OFFLINE,
            g = n ? c.Xo$ : c.qEK,
            E = (0, u.Z)(i) ? D.Skl.STREAMING : a;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        B(U({}, o), {
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
                    (0, r.jsx)(I.Z, {
                        confettiSpawnRef: p,
                        shouldFire: d && null != h && t.id !== h.id,
                        confettiLocation: x.Hn.MEMBER_USER
                    })
                ]
            })
        );
    }),
    Q = i.memo(function (e) {
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
                                      return t === D.IIU.CUSTOM_STATUS;
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
    J = i.memo(function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorStrings: l, colorRoleName: u, isOwner: f, ownerTooltipText: p, lostPermissionTooltipText: h, isTyping: E = !1, nick: b, user: y, currentUser: O, activities: v, applicationStream: I, status: P, shouldAnimateStatus: L = !1, isMobile: x, premiumSince: M, channel: j, guildId: G, className: F, nameplate: Z, hideClanTag: Y = !1, hideSubtext: W = !1, hideTooltip: K = !1, onMouseDown: J, onKeyDown: $, onClick: ee, onContextMenu: et, onClickPremiumGuildIcon: en, 'aria-controls': er, 'aria-expanded': ei, 'aria-posinset': ea, 'aria-setsize': eo, id: es, tabIndex: el, itemProps: ec, ref: eu } = e,
            ed = null == y ? void 0 : y.id,
            ef = w.ZP.useName(y),
            e_ = (null == (t = R.default.getCurrentUser()) ? void 0 : t.id) === ed,
            ep = i.useRef(null),
            eh = null != eu ? eu : ep,
            [em, eg] = i.useState(!1),
            [eE, eb] = i.useState(!1),
            [ey, eO] = i.useState(null),
            { voiceChannel: ev } = (0, _.Z)({
                userId: ed,
                guildId: G
            }),
            { voiceActivityStatusEnabled: eI } = (0, d.U)({ location: 'MemberListItem' }),
            eT = eI ? ev : void 0,
            {
                avatarDecorationSrc: eS,
                avatarSrc: eA,
                eventHandlers: eN
            } = (0, C.Z)({
                userId: ed,
                size: c.EFr.SIZE_32,
                animateOnHover: !(n || em),
                guildId: G
            }),
            eC = null != ec ? ec : {},
            { onFocus: eR } = eC,
            eP = V(eC, ['onFocus']),
            ew = (0, T.X7)(G, ed, null != l ? l : null),
            eD = (0, s.e7)([A.Z], () => null != A.Z.questEnrollmentBlockedUntil, []),
            [eL, ex] = i.useState(!1);
        i.useEffect(() => {
            n && ex(!1);
        }, [n]);
        let eM = (0, S.fN)(v),
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
                        N.Z,
                        B(
                            U(
                                {
                                    name: null != b ? b : ef,
                                    quest: eM,
                                    memberListItemRef: eh,
                                    applicationStream: I,
                                    isQuestEnrollmentBlocked: eD
                                },
                                e
                            ),
                            { closePopout: () => ex(!0) }
                        )
                    ),
                [eM, eh, I, eD, b, ef]
            );
        return null == y
            ? (0, r.jsx)(m.Z, {
                  avatarSize: c.EFr.SIZE_32,
                  className: k.placeholder
              })
            : (0, r.jsx)(c.yRy, {
                  targetElementRef: eh,
                  renderPopout: eF,
                  position: 'bottom',
                  shouldShow: ek,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.yRy.Animation.NONE,
                  spacing: -H,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          U(
                              {
                                  ref: eh,
                                  selected: n,
                                  className: o()(k.member, F, {
                                      [k.offline]: P === D.Skl.OFFLINE && !n,
                                      [k.flatBottom]: ek
                                  }),
                                  innerClassName: k.memberInner,
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
                                                className: k.username,
                                                children: (0, r.jsx)(q, {
                                                    colorRoleName: u,
                                                    colorString: null != a ? a : null,
                                                    name: null != b ? b : ef,
                                                    colorStrings: ew,
                                                    hideClanTag: Y,
                                                    user: y,
                                                    guildId: G,
                                                    isHovering: em
                                                })
                                            })
                                          : (0, r.jsx)(c.ua7, {
                                                text: h,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        B(U({}, e), {
                                                            className: o()(k.username, k.lostPermission),
                                                            children: (0, r.jsx)(q, {
                                                                colorRoleName: u,
                                                                colorString: null != a ? a : null,
                                                                name: null != b ? b : ef,
                                                                colorStrings: ew,
                                                                hideClanTag: Y,
                                                                user: y,
                                                                guildId: G,
                                                                isHovering: em
                                                            })
                                                        })
                                                    )
                                            }),
                                  avatar: (0, r.jsx)(X, {
                                      user: y,
                                      shouldAnimateStatus: L,
                                      activities: v,
                                      status: P,
                                      eventHandlers: eN,
                                      avatarSrc: eA,
                                      isMobile: x,
                                      isTyping: E,
                                      avatarDecorationSrc: eS,
                                      handleSetTypingRef: eV,
                                      typingRef: ey,
                                      currentUser: O
                                  }),
                                  nameplate: Z,
                                  subText: (0, r.jsx)(Q, {
                                      hideSubtext: W,
                                      activities: v,
                                      status: P,
                                      applicationStream: I,
                                      voiceStatusChannel: eT,
                                      user: y,
                                      channel: j,
                                      isHoveringOrFocusing: em || eE,
                                      quest: eM,
                                      hideTooltip: K
                                  }),
                                  decorators: (0, r.jsx)(z, {
                                      user: y,
                                      isOwner: f,
                                      lostPermissionTooltipText: h,
                                      ownerTooltipText: p,
                                      premiumSince: M,
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

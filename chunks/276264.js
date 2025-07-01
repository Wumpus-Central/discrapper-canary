(n.d(t, {
    Z: () => X,
    x: () => V
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
    b = n(172751),
    y = n(736144),
    O = n(884902),
    v = n(113434),
    I = n(569984),
    T = n(553393),
    S = n(518950),
    A = n(594174),
    N = n(709586),
    C = n(624138),
    R = n(51144),
    P = n(981631),
    w = n(674563),
    D = n(524484),
    L = n(388032),
    x = n(938159);
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
function M(e) {
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
function j(e, t) {
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
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = B(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let V = (0, C.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    F = 3,
    Z = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(c.ua7, {
                  text: null != i ? i : L.intl.string(L.t.pclUFB),
                  children: (e) =>
                      (0, r.jsx)(
                          c.CEn,
                          U(
                              M(
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
    H = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(c.ua7, {
                  text: L.intl.formatToPlainString(L.t.IWkAq6, { date: t }),
                  children: (e) =>
                      (0, r.jsx)(c.P3F, {
                          onClick: n,
                          tabIndex: -1,
                          children: (0, r.jsx)(N.Z, U(M({}, e), { className: x.premiumIcon }))
                      })
              });
    }),
    Y = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = w.Hb.BOT;
        return (0, r.jsx)(h.Z, {
            className: x.botTag,
            type: n,
            verified: t.isVerifiedBot()
        });
    }),
    W = i.memo(function (e) {
        let { user: t, isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a, premiumSince: o, onClickPremiumGuildIcon: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(Y, { user: t }),
                (0, r.jsx)(Z, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a
                }),
                (0, r.jsx)(H, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s
                })
            ]
        });
    }),
    K = i.memo(function (e) {
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
    z = i.memo(function (e) {
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
                        U(M({}, o), {
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
    q = i.memo(function (e) {
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
                                      return t === P.IIU.CUSTOM_STATUS;
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
    X = i.memo(function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorStrings: l, colorRoleName: u, isOwner: f, ownerTooltipText: p, lostPermissionTooltipText: h, isTyping: E = !1, nick: b, user: y, currentUser: N, activities: C, applicationStream: w, status: D, shouldAnimateStatus: L = !1, isMobile: k, premiumSince: j, channel: B, guildId: V, className: Z, nameplate: H, hideClanTag: Y = !1, hideSubtext: X = !1, hideTooltip: Q = !1, onMouseDown: J, onKeyDown: $, onClick: ee, onContextMenu: et, onClickPremiumGuildIcon: en, 'aria-controls': er, 'aria-expanded': ei, 'aria-posinset': ea, 'aria-setsize': eo, id: es, tabIndex: el, itemProps: ec, ref: eu } = e,
            ed = null == y ? void 0 : y.id,
            ef = R.ZP.useName(y),
            e_ = (null == (t = A.default.getCurrentUser()) ? void 0 : t.id) === ed,
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
            } = (0, S.Z)({
                user: y,
                size: c.EFr.SIZE_32,
                animateOnHover: !(n || em),
                guildId: V
            }),
            eC = null != ec ? ec : {},
            { onFocus: eR } = eC,
            eP = G(eC, ['onFocus']),
            ew = (0, O.X7)(V, ed, l),
            eD = (0, s.e7)([I.Z], () => null != I.Z.questEnrollmentBlockedUntil, []),
            [eL, ex] = i.useState(!1);
        i.useEffect(() => {
            n && ex(!1);
        }, [n]);
        let ek = (0, v.fN)(C),
            eM = null != ek && !e_ && n && !eL,
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
                        T.Z,
                        U(
                            M(
                                {
                                    name: null != b ? b : ef,
                                    quest: ek,
                                    memberListItemRef: eh,
                                    applicationStream: w,
                                    isQuestEnrollmentBlocked: eD
                                },
                                e
                            ),
                            { closePopout: () => ex(!0) }
                        )
                    ),
                [ek, eh, w, eD, b, ef]
            );
        return null == y
            ? (0, r.jsx)(m.Z, {
                  avatarSize: c.EFr.SIZE_32,
                  className: x.placeholder
              })
            : (0, r.jsx)(c.yRy, {
                  targetElementRef: eh,
                  renderPopout: eF,
                  position: 'bottom',
                  shouldShow: eM,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.yRy.Animation.NONE,
                  spacing: -F,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          M(
                              {
                                  ref: eh,
                                  selected: n,
                                  className: o()(x.member, Z, {
                                      [x.offline]: D === P.Skl.OFFLINE && !n,
                                      [x.flatBottom]: eM
                                  }),
                                  innerClassName: x.memberInner,
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
                                                className: x.username,
                                                children: (0, r.jsx)(K, {
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
                                                        U(M({}, e), {
                                                            className: o()(x.username, x.lostPermission),
                                                            children: (0, r.jsx)(K, {
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
                                  avatar: (0, r.jsx)(z, {
                                      user: y,
                                      shouldAnimateStatus: L,
                                      activities: C,
                                      status: D,
                                      eventHandlers: eN,
                                      avatarSrc: eA,
                                      isMobile: k,
                                      isTyping: E,
                                      avatarDecorationSrc: eS,
                                      handleSetTypingRef: eV,
                                      typingRef: ey,
                                      currentUser: N
                                  }),
                                  nameplate: H,
                                  subText: (0, r.jsx)(q, {
                                      hideSubtext: X,
                                      activities: C,
                                      status: D,
                                      applicationStream: w,
                                      voiceStatusChannel: eT,
                                      user: y,
                                      channel: B,
                                      isHoveringOrFocusing: em || eE,
                                      quest: ek,
                                      hideTooltip: Q
                                  }),
                                  decorators: (0, r.jsx)(W, {
                                      user: y,
                                      isOwner: f,
                                      lostPermissionTooltipText: h,
                                      ownerTooltipText: p,
                                      premiumSince: j,
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

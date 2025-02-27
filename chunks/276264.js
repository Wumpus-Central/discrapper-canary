n.d(t, {
    Z: () => U,
    x: () => k
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(477690),
    l = n(481060),
    c = n(420660),
    u = n(468363),
    d = n(297369),
    f = n(956221),
    _ = n(771173),
    p = n(385499),
    h = n(693728),
    g = n(979264),
    m = n(554300),
    E = n(558602),
    v = n(736144),
    b = n(113434),
    y = n(553393),
    O = n(518950),
    S = n(594174),
    I = n(709586),
    T = n(624138),
    N = n(51144),
    A = n(981631),
    C = n(674563),
    R = n(524484),
    P = n(388032),
    D = n(748241);
function w(e, t, n) {
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
function L(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = (0, T.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    j = 3,
    U = function (e) {
        var t;
        let { selected: n = !1, colorString: o, colorRoleName: s, isOwner: T, ownerTooltipText: w, lostPermissionTooltipText: x, isTyping: k = !1, nick: U, user: G, currentUser: B, activities: V, applicationStream: F, status: Z, shouldAnimateStatus: H = !1, isMobile: W, premiumSince: Y, channel: K, guildId: z, className: q, nameplate: Q, hideClanTag: X = !1, hideSubtext: J = !1, onMouseDown: $, onKeyDown: ee, onClick: et, onContextMenu: en, onClickPremiumGuildIcon: er, onFocus: ei, 'aria-controls': eo, 'aria-expanded': ea, 'aria-posinset': es, 'aria-setsize': el, id: ec, tabIndex: eu, itemProps: ed } = e,
            ef = null == G ? void 0 : G.id,
            e_ = N.ZP.useName(G),
            ep = (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === ef,
            eh = i.useRef(null),
            [eg, em] = i.useState(!1),
            [eE, ev] = i.useState(null),
            { voiceChannel: eb } = (0, f.Z)({
                userId: ef,
                guildId: z,
                surface: 'member-list-item'
            }),
            { voiceActivityStatusEnabled: ey } = (0, u.U)({ location: 'MemberListItem' }),
            eO = ey ? eb : void 0,
            {
                avatarDecorationSrc: eS,
                avatarSrc: eI,
                eventHandlers: eT
            } = (0, O.Z)({
                user: G,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || eg),
                guildId: z
            }),
            [eN, eA] = i.useState(!1);
        i.useEffect(() => {
            n && eA(!1);
        }, [n]);
        let eC = (0, b.Fr)(V),
            eR = null != eC && !ep && n && !eN,
            eP = () => {
                em(!0);
            },
            eD = () => {
                em(!1);
            },
            ew = (e) => {
                ev(e);
            },
            eL = () => {
                if (J) return null;
                if (
                    (0, d.Z)({
                        activities: V,
                        status: Z,
                        applicationStream: F,
                        voiceChannel: eO
                    })
                ) {
                    let e = !(0, E.Z)({
                        activity:
                            null == V
                                ? void 0
                                : V.find((e) => {
                                      let { type: t } = e;
                                      return t === A.IIU.CUSTOM_STATUS;
                                  }),
                        user: G,
                        channel: K
                    });
                    return (0, r.jsx)(_.Z, {
                        location: 'MemberListItem',
                        user: G,
                        activities: V,
                        applicationStream: F,
                        voiceChannel: eO,
                        animate: eg,
                        hideEmoji: e,
                        hasQuest: null != eC,
                        textClassName: D.activityText
                    });
                }
                return null;
            },
            ex = () =>
                null != T && T && null == x
                    ? (0, r.jsx)(l.ua7, {
                          text: null != w ? w : P.NW.string(P.t.pclUFB),
                          children: (e) =>
                              (0, r.jsx)(
                                  l.CEn,
                                  M(
                                      L(
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
                    : null,
            eM = () =>
                null == Y
                    ? null
                    : (0, r.jsx)(l.ua7, {
                          text: P.NW.formatToPlainString(P.t.IWkAq6, { date: Y }),
                          children: (e) =>
                              (0, r.jsx)(l.P3F, {
                                  onClick: er,
                                  tabIndex: -1,
                                  children: (0, r.jsx)(I.Z, M(L({}, e), { className: D.premiumIcon }))
                              })
                      }),
            ek = () => {
                let e = (null == G ? void 0 : G.isClyde()) ? C.Hb.AI : C.Hb.BOT;
                return null != G && G.bot
                    ? (0, r.jsx)(p.Z, {
                          className: D.botTag,
                          type: e,
                          verified: G.isVerifiedBot()
                      })
                    : null;
            },
            ej = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [ek(), ex(), eM()]
                }),
            eU = (e, t) => {
                let n = H ? l.Xo$ : l.qEK,
                    i = (0, c.Z)(V) ? A.Skl.STREAMING : Z;
                return (
                    (i = t ? void 0 : i),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                n,
                                M(L({}, eT), {
                                    size: l.EFr.SIZE_32,
                                    src: eI,
                                    isMobile: W,
                                    isTyping: k,
                                    status: i,
                                    'aria-label': e.username,
                                    statusTooltip: !0,
                                    avatarDecoration: eS,
                                    typingIndicatorRef: ew
                                })
                            ),
                            (0, r.jsx)(v.Z, {
                                confettiSpawnRef: eE,
                                shouldFire: k && null != B && e.id !== B.id,
                                confettiLocation: R.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eG = i.useMemo(() => ({ source: A.jXE.MEMBER_LIST }), []),
            eB = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.PUh, {
                            roleName: s,
                            color: null != o ? o : void 0,
                            name: null != U ? U : e_,
                            className: D.name
                        }),
                        !X &&
                            (0, r.jsx)(g.ZP, {
                                primaryGuild: null == G ? void 0 : G.primaryGuild,
                                userId: null == G ? void 0 : G.id,
                                contextGuildId: z,
                                disableGuildProfile: !0,
                                className: D.clanTag,
                                profileViewedAnalytics: eG
                            })
                    ]
                }),
            eV = (e) =>
                (0, r.jsx)(
                    y.Z,
                    M(
                        L(
                            {
                                quest: eC,
                                memberListItemRef: eh,
                                applicationStream: F
                            },
                            e
                        ),
                        { closePopout: () => eA(!0) }
                    )
                ),
            eF = Z === A.Skl.OFFLINE;
        return null == G
            ? (0, r.jsx)(h.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: D.placeholder
              })
            : (0, r.jsx)(l.yRy, {
                  renderPopout: eV,
                  position: 'bottom',
                  shouldShow: eR,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -j,
                  children: () =>
                      (0, r.jsx)(
                          m.Z,
                          L(
                              {
                                  ref: eh,
                                  selected: n,
                                  className: a()(D.member, q, { [D.offline]: eF && !n }),
                                  innerClassName: D.memberInner,
                                  onClick: et,
                                  onKeyDown: ee,
                                  onMouseDown: $,
                                  onContextMenu: en,
                                  onMouseEnter: eP,
                                  onMouseLeave: eD,
                                  hovered: eg,
                                  name:
                                      null == x
                                          ? (0, r.jsx)('span', {
                                                className: D.username,
                                                children: eB()
                                            })
                                          : (0, r.jsx)(l.ua7, {
                                                text: x,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        M(L({}, e), {
                                                            className: a()(D.username, D.lostPermission),
                                                            children: eB()
                                                        })
                                                    )
                                            }),
                                  avatar: eU(G, eF),
                                  nameplate: Q,
                                  subText: eL(),
                                  decorators: ej(),
                                  'aria-controls': eo,
                                  'aria-expanded': ea,
                                  'aria-setsize': el,
                                  'aria-posinset': es,
                                  id: ec,
                                  tabIndex: eu,
                                  onFocus: ei,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4
                                      }
                                  }
                              },
                              ed
                          )
                      )
              });
    };

n.d(t, {
    Z: () => G,
    x: () => j
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
    v = n(614185),
    b = n(736144),
    y = n(113434),
    O = n(553393),
    S = n(518950),
    I = n(594174),
    T = n(709586),
    N = n(624138),
    A = n(51144),
    C = n(981631),
    R = n(674563),
    P = n(524484),
    D = n(388032),
    w = n(748241);
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
let j = (0, N.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    U = 3,
    G = function (e) {
        var t;
        let { selected: n = !1, colorString: o, colorRoleName: s, isOwner: N, ownerTooltipText: L, lostPermissionTooltipText: M, isTyping: j = !1, nick: G, user: B, currentUser: V, activities: F, applicationStream: Z, status: H, shouldAnimateStatus: W = !1, isMobile: Y, premiumSince: K, channel: z, guildId: q, className: Q, nameplate: X, hideClanTag: J = !1, hideSubtext: $ = !1, onMouseDown: ee, onKeyDown: et, onClick: en, onContextMenu: er, onClickPremiumGuildIcon: ei, onFocus: eo, 'aria-controls': ea, 'aria-expanded': es, 'aria-posinset': el, 'aria-setsize': ec, id: eu, tabIndex: ed, itemProps: ef } = e,
            e_ = null == B ? void 0 : B.id,
            ep = A.ZP.useName(B),
            eh = (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e_,
            eg = i.useRef(null),
            [em, eE] = i.useState(!1),
            [ev, eb] = i.useState(null),
            { voiceChannel: ey } = (0, f.Z)({
                userId: e_,
                guildId: q,
                surface: 'member-list-item'
            }),
            { voiceActivityStatusEnabled: eO } = (0, u.U)({ location: 'MemberListItem' }),
            eS = eO ? ey : void 0,
            {
                avatarDecorationSrc: eI,
                avatarSrc: eT,
                eventHandlers: eN
            } = (0, S.Z)({
                user: B,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || em),
                guildId: q
            }),
            eA = (0, v.D)('ListItem') && null != X,
            [eC, eR] = i.useState(!1);
        i.useEffect(() => {
            n && eR(!1);
        }, [n]);
        let eP = (0, y.Fr)(F),
            eD = null != eP && !eh && n && !eC,
            ew = () => {
                eE(!0);
            },
            eL = () => {
                eE(!1);
            },
            ex = (e) => {
                eb(e);
            },
            eM = () => {
                if ($) return null;
                if (
                    (0, d.Z)({
                        activities: F,
                        status: H,
                        applicationStream: Z,
                        voiceChannel: eS
                    })
                ) {
                    let e = !(0, E.Z)({
                        activity:
                            null == F
                                ? void 0
                                : F.find((e) => {
                                      let { type: t } = e;
                                      return t === C.IIU.CUSTOM_STATUS;
                                  }),
                        user: B,
                        channel: z
                    });
                    return (0, r.jsx)(_.Z, {
                        location: 'MemberListItem',
                        user: B,
                        activities: F,
                        applicationStream: Z,
                        voiceChannel: eS,
                        animate: em,
                        hideEmoji: e,
                        hasQuest: null != eP,
                        textClassName: w.activityText
                    });
                }
                return null;
            },
            ek = () =>
                null != N && N && null == M
                    ? (0, r.jsx)(l.ua7, {
                          text: null != L ? L : D.NW.string(D.t.pclUFB),
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
                                      { className: w.ownerIcon }
                                  )
                              )
                      })
                    : null,
            ej = () =>
                null == K
                    ? null
                    : (0, r.jsx)(l.ua7, {
                          text: D.NW.formatToPlainString(D.t.IWkAq6, { date: K }),
                          children: (e) =>
                              (0, r.jsx)(l.P3F, {
                                  onClick: ei,
                                  tabIndex: -1,
                                  children: (0, r.jsx)(T.Z, k(x({}, e), { className: w.premiumIcon }))
                              })
                      }),
            eU = () => {
                let e = (null == B ? void 0 : B.isClyde()) ? R.Hb.AI : R.Hb.BOT;
                return null != B && B.bot
                    ? (0, r.jsx)(p.Z, {
                          className: w.botTag,
                          type: e,
                          verified: B.isVerifiedBot()
                      })
                    : null;
            },
            eG = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [eU(), ek(), ej()]
                }),
            eB = (e, t) => {
                let n = W ? l.Xo$ : l.qEK,
                    i = (0, c.Z)(F) ? C.Skl.STREAMING : H;
                return (
                    (i = t ? void 0 : i),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                n,
                                k(x({}, eN), {
                                    size: l.EFr.SIZE_32,
                                    src: eT,
                                    isMobile: Y,
                                    isTyping: j,
                                    status: i,
                                    'aria-label': e.username,
                                    statusTooltip: !0,
                                    avatarDecoration: eI,
                                    typingIndicatorRef: ex
                                })
                            ),
                            (0, r.jsx)(b.Z, {
                                confettiSpawnRef: ev,
                                shouldFire: j && null != V && e.id !== V.id,
                                confettiLocation: P.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eV = i.useMemo(() => ({ source: C.jXE.MEMBER_LIST }), []),
            eF = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.PUh, {
                            roleName: s,
                            color: null != o ? o : void 0,
                            name: null != G ? G : ep,
                            className: w.name
                        }),
                        !J &&
                            (0, r.jsx)(g.ZP, {
                                primaryGuild: null == B ? void 0 : B.primaryGuild,
                                userId: null == B ? void 0 : B.id,
                                contextGuildId: q,
                                disableGuildProfile: !0,
                                className: w.clanTag,
                                profileViewedAnalytics: eV
                            })
                    ]
                }),
            eZ = (e) =>
                (0, r.jsx)(
                    O.Z,
                    k(
                        x(
                            {
                                quest: eP,
                                memberListItemRef: eg,
                                applicationStream: Z
                            },
                            e
                        ),
                        { closePopout: () => eR(!0) }
                    )
                ),
            eH = H === C.Skl.OFFLINE;
        return null == B
            ? (0, r.jsx)(h.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: w.placeholder
              })
            : (0, r.jsx)(l.yRy, {
                  renderPopout: eZ,
                  position: 'bottom',
                  shouldShow: eD,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -U,
                  children: () =>
                      (0, r.jsx)(
                          m.Z,
                          x(
                              {
                                  ref: eg,
                                  selected: n,
                                  className: a()(w.member, Q, { [w.offline]: eH && !n }),
                                  innerClassName: w.memberInner,
                                  onClick: en,
                                  onKeyDown: et,
                                  onMouseDown: ee,
                                  onContextMenu: er,
                                  onMouseEnter: ew,
                                  onMouseLeave: eL,
                                  hovered: em,
                                  name:
                                      null == M
                                          ? (0, r.jsx)('span', {
                                                className: w.username,
                                                children: eF()
                                            })
                                          : (0, r.jsx)(l.ua7, {
                                                text: M,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        k(x({}, e), {
                                                            className: a()(w.username, w.lostPermission),
                                                            children: eF()
                                                        })
                                                    )
                                            }),
                                  avatar: eB(B, eH),
                                  nameplate: eA ? X : void 0,
                                  subText: eM(),
                                  decorators: eG(),
                                  'aria-controls': ea,
                                  'aria-expanded': es,
                                  'aria-setsize': ec,
                                  'aria-posinset': el,
                                  id: eu,
                                  tabIndex: ed,
                                  onFocus: eo,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4
                                      }
                                  }
                              },
                              ef
                          )
                      )
              });
    };

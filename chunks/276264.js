n.d(t, {
    Z: () => Z,
    x: () => G
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
    p = n(771173),
    _ = n(372276),
    h = n(385499),
    m = n(693728),
    g = n(979264),
    E = n(554300),
    v = n(558602),
    b = n(614185),
    y = n(736144),
    O = n(113434),
    S = n(553393),
    I = n(565640),
    T = n(518950),
    N = n(594174),
    A = n(709586),
    C = n(624138),
    R = n(51144),
    P = n(981631),
    w = n(674563),
    D = n(524484),
    x = n(388032),
    L = n(748241);
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
let G = (0, C.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    B = 3,
    Z = function (e) {
        var t;
        let { selected: n = !1, colorString: o, colorRoleName: s, isOwner: C, ownerTooltipText: M, lostPermissionTooltipText: j, isTyping: G = !1, nick: Z, user: F, currentUser: V, activities: H, applicationStream: W, status: Y, shouldAnimateStatus: K = !1, isMobile: z, premiumSince: q, channel: Q, guildId: X, className: J, nameplate: $, hideClanTag: ee = !1, hideSubtext: et = !1, onMouseDown: en, onKeyDown: er, onClick: ei, onContextMenu: eo, onClickPremiumGuildIcon: ea, onFocus: es, 'aria-controls': el, 'aria-expanded': ec, 'aria-posinset': eu, 'aria-setsize': ed, id: ef, tabIndex: ep, itemProps: e_ } = e,
            eh = null == F ? void 0 : F.id,
            em = R.ZP.useName(F),
            eg = (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eh,
            eE = i.useRef(null),
            [ev, eb] = i.useState(!1),
            [ey, eO] = i.useState(null),
            { voiceChannel: eS } = (0, f.Z)({
                userId: eh,
                guildId: X,
                surface: 'member-list-item'
            }),
            { voiceActivityStatusEnabled: eI } = (0, u.U)({ location: 'MemberListItem' }),
            eT = eI ? eS : void 0,
            eN = (0, I.Z)(eh, 'MemberListItem'),
            {
                avatarDecorationSrc: eA,
                avatarSrc: eC,
                eventHandlers: eR
            } = (0, T.Z)({
                user: F,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || ev),
                guildId: X
            }),
            eP = (0, b.D)('ListItem') && null != $,
            [ew, eD] = i.useState(!1);
        i.useEffect(() => {
            n && eD(!1);
        }, [n]);
        let ex = (0, O.Fr)(H),
            eL = null != ex && !eg && n && !ew,
            eM = () => {
                eb(!0);
            },
            ek = () => {
                eb(!1);
            },
            ej = (e) => {
                eO(e);
            },
            eU = () => {
                if (et) return null;
                if (
                    (0, d.Z)({
                        activities: H,
                        status: Y,
                        applicationStream: W,
                        voiceChannel: eT
                    })
                ) {
                    let e = !(0, v.Z)({
                        activity:
                            null == H
                                ? void 0
                                : H.find((e) => {
                                      let { type: t } = e;
                                      return t === P.IIU.CUSTOM_STATUS;
                                  }),
                        user: F,
                        channel: Q
                    });
                    return (0, r.jsx)(p.Z, {
                        location: 'MemberListItem',
                        user: F,
                        activities: H,
                        applicationStream: W,
                        voiceChannel: eT,
                        animate: ev,
                        hideEmoji: e,
                        hasQuest: null != ex,
                        textClassName: L.activityText
                    });
                }
                return null != eN
                    ? (0, r.jsx)(_.Z, {
                          textClassName: L.activityText,
                          entry: eN
                      })
                    : null;
            },
            eG = () =>
                null != C && C && null == j
                    ? (0, r.jsx)(l.ua7, {
                          text: null != M ? M : x.NW.string(x.t.pclUFB),
                          children: (e) =>
                              (0, r.jsx)(
                                  l.CEn,
                                  U(
                                      k(
                                          {
                                              size: 'md',
                                              color: 'currentColor'
                                          },
                                          e
                                      ),
                                      { className: L.ownerIcon }
                                  )
                              )
                      })
                    : null,
            eB = () =>
                null == q
                    ? null
                    : (0, r.jsx)(l.ua7, {
                          text: x.NW.formatToPlainString(x.t.IWkAq6, { date: q }),
                          children: (e) =>
                              (0, r.jsx)(l.P3F, {
                                  onClick: ea,
                                  tabIndex: -1,
                                  children: (0, r.jsx)(A.Z, U(k({}, e), { className: L.premiumIcon }))
                              })
                      }),
            eZ = () => {
                let e = (null == F ? void 0 : F.isClyde()) ? w.Hb.AI : w.Hb.BOT;
                return null != F && F.bot
                    ? (0, r.jsx)(h.Z, {
                          className: L.botTag,
                          type: e,
                          verified: F.isVerifiedBot()
                      })
                    : null;
            },
            eF = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [eZ(), eG(), eB()]
                }),
            eV = (e, t) => {
                let n = K ? l.Xo$ : l.qEK,
                    i = (0, c.Z)(H) ? P.Skl.STREAMING : Y;
                return (
                    (i = t ? void 0 : i),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                n,
                                U(k({}, eR), {
                                    size: l.EFr.SIZE_32,
                                    src: eC,
                                    isMobile: z,
                                    isTyping: G,
                                    status: i,
                                    'aria-label': e.username,
                                    statusTooltip: !0,
                                    avatarDecoration: eA,
                                    typingIndicatorRef: ej
                                })
                            ),
                            (0, r.jsx)(y.Z, {
                                confettiSpawnRef: ey,
                                shouldFire: G && null != V && e.id !== V.id,
                                confettiLocation: D.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eH = i.useMemo(() => ({ source: P.jXE.MEMBER_LIST }), []),
            eW = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.PUh, {
                            roleName: s,
                            color: null != o ? o : void 0,
                            name: null != Z ? Z : em,
                            className: L.name
                        }),
                        !ee &&
                            (0, r.jsx)(g.ZP, {
                                primaryGuild: null == F ? void 0 : F.primaryGuild,
                                userId: null == F ? void 0 : F.id,
                                contextGuildId: X,
                                disableGuildProfile: !0,
                                className: L.clanTag,
                                profileViewedAnalytics: eH
                            })
                    ]
                }),
            eY = (e) =>
                (0, r.jsx)(
                    S.Z,
                    U(
                        k(
                            {
                                quest: ex,
                                memberListItemRef: eE,
                                applicationStream: W
                            },
                            e
                        ),
                        { closePopout: () => eD(!0) }
                    )
                ),
            eK = Y === P.Skl.OFFLINE;
        return null == F
            ? (0, r.jsx)(m.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: L.placeholder
              })
            : (0, r.jsx)(l.yRy, {
                  renderPopout: eY,
                  position: 'bottom',
                  shouldShow: eL,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -B,
                  children: () =>
                      (0, r.jsx)(
                          E.Z,
                          k(
                              {
                                  ref: eE,
                                  selected: n,
                                  className: a()(L.member, J, { [L.offline]: eK && !n }),
                                  innerClassName: L.memberInner,
                                  onClick: ei,
                                  onKeyDown: er,
                                  onMouseDown: en,
                                  onContextMenu: eo,
                                  onMouseEnter: eM,
                                  onMouseLeave: ek,
                                  hovered: ev,
                                  name:
                                      null == j
                                          ? (0, r.jsx)('span', {
                                                className: L.username,
                                                children: eW()
                                            })
                                          : (0, r.jsx)(l.ua7, {
                                                text: j,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        U(k({}, e), {
                                                            className: a()(L.username, L.lostPermission),
                                                            children: eW()
                                                        })
                                                    )
                                            }),
                                  avatar: eV(F, eK),
                                  nameplate: eP ? $ : void 0,
                                  subText: eU(),
                                  decorators: eF(),
                                  'aria-controls': el,
                                  'aria-expanded': ec,
                                  'aria-setsize': ed,
                                  'aria-posinset': eu,
                                  id: ef,
                                  tabIndex: ep,
                                  onFocus: es,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4
                                      }
                                  }
                              },
                              e_
                          )
                      )
              });
    };

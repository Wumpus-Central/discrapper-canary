n.d(t, {
    Z: () => V,
    x: () => Z
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
    y = n(359135),
    O = n(516817),
    S = n(736144),
    I = n(113434),
    T = n(553393),
    N = n(565640),
    A = n(518950),
    C = n(594174),
    R = n(709586),
    P = n(624138),
    w = n(51144),
    D = n(981631),
    x = n(674563),
    L = n(524484),
    M = n(388032),
    k = n(748241);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
let Z = (0, P.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    F = 3,
    V = function (e) {
        var t;
        let { selected: n = !1, colorString: o, colorRoleName: s, isOwner: P, ownerTooltipText: j, lostPermissionTooltipText: G, isTyping: Z = !1, nick: V, user: H, currentUser: W, activities: Y, applicationStream: K, status: z, shouldAnimateStatus: q = !1, isMobile: Q, premiumSince: X, channel: J, guildId: $, className: ee, nameplate: et, hideClanTag: en = !1, hideSubtext: er = !1, onMouseDown: ei, onKeyDown: eo, onClick: ea, onContextMenu: es, onClickPremiumGuildIcon: el, onFocus: ec, 'aria-controls': eu, 'aria-expanded': ed, 'aria-posinset': ef, 'aria-setsize': ep, id: e_, tabIndex: eh, itemProps: em } = e,
            eg = null == H ? void 0 : H.id,
            eE = w.ZP.useName(H),
            ev = (null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eg,
            eb = i.useRef(null),
            [ey, eO] = i.useState(!1),
            [eS, eI] = i.useState(null),
            { voiceChannel: eT } = (0, f.Z)({
                userId: eg,
                guildId: $,
                surface: 'member-list-item'
            }),
            { voiceActivityStatusEnabled: eN } = (0, u.U)({ location: 'MemberListItem' }),
            eA = eN ? eT : void 0,
            eC = (0, N.Z)(eg, 'MemberListItem'),
            {
                avatarDecorationSrc: eR,
                avatarSrc: eP,
                eventHandlers: ew
            } = (0, A.Z)({
                user: H,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || ey),
                guildId: $
            }),
            eD = (0, b.D)('MemberListItem') && null != et,
            [ex, eL] = i.useState(!1);
        i.useEffect(() => {
            n && eL(!1);
        }, [n]);
        let eM = (0, I.Fr)(Y),
            ek = null != eM && !ev && n && !ex,
            ej = () => {
                eO(!0);
            },
            eU = () => {
                eO(!1);
            },
            eG = (e) => {
                eI(e);
            },
            eB = () => {
                if (er) return null;
                if (
                    (0, d.Z)({
                        activities: Y,
                        status: z,
                        applicationStream: K,
                        voiceChannel: eA
                    })
                ) {
                    let e = !(0, v.Z)({
                        activity:
                            null == Y
                                ? void 0
                                : Y.find((e) => {
                                      let { type: t } = e;
                                      return t === D.IIU.CUSTOM_STATUS;
                                  }),
                        user: H,
                        channel: J
                    });
                    return (0, r.jsx)(p.Z, {
                        location: 'MemberListItem',
                        user: H,
                        activities: Y,
                        applicationStream: K,
                        voiceChannel: eA,
                        animate: ey,
                        hideEmoji: e,
                        hasQuest: null != eM,
                        textClassName: k.activityText
                    });
                }
                return null != eC
                    ? (0, r.jsx)(_.Z, {
                          textClassName: k.activityText,
                          entry: eC
                      })
                    : null;
            },
            eZ = () =>
                null != P && P && null == G
                    ? (0, r.jsx)(l.ua7, {
                          text: null != j ? j : M.NW.string(M.t.pclUFB),
                          children: (e) =>
                              (0, r.jsx)(
                                  l.CEn,
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
                    : null,
            eF = () =>
                null == X
                    ? null
                    : (0, r.jsx)(l.ua7, {
                          text: M.NW.formatToPlainString(M.t.IWkAq6, { date: X }),
                          children: (e) =>
                              (0, r.jsx)(l.P3F, {
                                  onClick: el,
                                  tabIndex: -1,
                                  children: (0, r.jsx)(R.Z, B(U({}, e), { className: k.premiumIcon }))
                              })
                      }),
            eV = () => {
                let e = (null == H ? void 0 : H.isClyde()) ? x.Hb.AI : x.Hb.BOT;
                return null != H && H.bot
                    ? (0, r.jsx)(h.Z, {
                          className: k.botTag,
                          type: e,
                          verified: H.isVerifiedBot()
                      })
                    : null;
            },
            eH = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [eV(), eZ(), eF()]
                }),
            eW = (e, t) => {
                let n = q ? l.Xo$ : l.qEK,
                    i = (0, c.Z)(Y) ? D.Skl.STREAMING : z;
                return (
                    (i = t ? void 0 : i),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                n,
                                B(U({}, ew), {
                                    size: l.EFr.SIZE_32,
                                    src: eP,
                                    isMobile: Q,
                                    isTyping: Z,
                                    status: i,
                                    'aria-label': e.username,
                                    statusTooltip: !0,
                                    avatarDecoration: eR,
                                    typingIndicatorRef: eG
                                })
                            ),
                            (0, r.jsx)(S.Z, {
                                confettiSpawnRef: eS,
                                shouldFire: Z && null != W && e.id !== W.id,
                                confettiLocation: L.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eY = i.useMemo(() => ({ source: D.jXE.MEMBER_LIST }), []),
            eK = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.PUh, {
                            roleName: s,
                            color: null != o ? o : void 0,
                            name: null != V ? V : eE,
                            className: k.name
                        }),
                        !en &&
                            (0, r.jsx)(g.ZP, {
                                primaryGuild: null == H ? void 0 : H.primaryGuild,
                                userId: null == H ? void 0 : H.id,
                                contextGuildId: $,
                                disableGuildProfile: !0,
                                className: k.clanTag,
                                profileViewedAnalytics: eY
                            })
                    ]
                }),
            ez = (e) =>
                (0, r.jsx)(
                    T.Z,
                    B(
                        U(
                            {
                                quest: eM,
                                memberListItemRef: eb,
                                applicationStream: K
                            },
                            e
                        ),
                        { closePopout: () => eL(!0) }
                    )
                ),
            eq = z === D.Skl.OFFLINE;
        return null == H
            ? (0, r.jsx)(m.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: k.placeholder
              })
            : (0, r.jsx)(l.yRy, {
                  renderPopout: ez,
                  position: 'bottom',
                  shouldShow: ek,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -F,
                  children: () =>
                      (0, r.jsx)(O.Z, {
                          placement: y.QY.Memberlist,
                          nameplate: et,
                          hover: ey,
                          selected: n,
                          children: (0, r.jsx)(
                              E.Z,
                              U(
                                  {
                                      ref: eb,
                                      selected: n && !eD,
                                      highlighted: n && eD,
                                      className: a()(k.member, ee, { [k.offline]: eq && !n }),
                                      innerClassName: k.memberInner,
                                      onClick: ea,
                                      onKeyDown: eo,
                                      onMouseDown: ei,
                                      onContextMenu: es,
                                      onMouseEnter: ej,
                                      onMouseLeave: eU,
                                      name:
                                          null == G
                                              ? (0, r.jsx)('span', {
                                                    className: k.username,
                                                    children: eK()
                                                })
                                              : (0, r.jsx)(l.ua7, {
                                                    text: G,
                                                    children: (e) =>
                                                        (0, r.jsx)(
                                                            'span',
                                                            B(U({}, e), {
                                                                className: a()(k.username, k.lostPermission),
                                                                children: eK()
                                                            })
                                                        )
                                                }),
                                      avatar: eW(H, eq),
                                      subText: eB(),
                                      decorators: eH(),
                                      'aria-controls': eu,
                                      'aria-expanded': ed,
                                      'aria-setsize': ep,
                                      'aria-posinset': ef,
                                      id: e_,
                                      tabIndex: eh,
                                      onFocus: ec,
                                      focusProps: {
                                          offset: {
                                              top: 4,
                                              bottom: 4,
                                              left: 4,
                                              right: 4
                                          }
                                      }
                                  },
                                  em
                              )
                          )
                      })
              });
    };

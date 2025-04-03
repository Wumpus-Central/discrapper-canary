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
    N = n(624138),
    A = n(51144),
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
let j = (0, N.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    U = 3,
    G = function (e) {
        var t;
        let { selected: n = !1, colorString: o, colorStrings: s, colorRoleName: N, isOwner: L, ownerTooltipText: M, lostPermissionTooltipText: j, isTyping: G = !1, nick: B, user: F, currentUser: V, activities: Z, applicationStream: H, status: W, shouldAnimateStatus: Y = !1, isMobile: K, premiumSince: z, channel: q, guildId: Q, className: X, nameplate: J, hideClanTag: $ = !1, hideSubtext: ee = !1, onMouseDown: et, onKeyDown: en, onClick: er, onContextMenu: ei, onClickPremiumGuildIcon: eo, onFocus: ea, 'aria-controls': es, 'aria-expanded': el, 'aria-posinset': ec, 'aria-setsize': eu, id: ed, tabIndex: ef, itemProps: e_ } = e,
            ep = null == F ? void 0 : F.id,
            eh = A.ZP.useName(F),
            em = (null == (t = S.default.getCurrentUser()) ? void 0 : t.id) === ep,
            eg = i.useRef(null),
            [eE, eb] = i.useState(!1),
            [ey, ev] = i.useState(null),
            { voiceChannel: eO } = (0, f.Z)({
                userId: ep,
                guildId: Q,
                surface: 'member-list-item'
            }),
            { voiceActivityStatusEnabled: eI } = (0, u.U)({ location: 'MemberListItem' }),
            eS = eI ? eO : void 0,
            {
                avatarDecorationSrc: eT,
                avatarSrc: eN,
                eventHandlers: eA
            } = (0, I.Z)({
                user: F,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || eE),
                guildId: Q
            }),
            [eC, eR] = i.useState(!1);
        i.useEffect(() => {
            n && eR(!1);
        }, [n]);
        let eP = (0, v.Fr)(Z),
            ew = null != eP && !em && n && !eC,
            eD = (0, y.E)(Q, s),
            eL = () => {
                eb(!0);
            },
            ex = () => {
                eb(!1);
            },
            eM = (e) => {
                ev(e);
            },
            ek = () => {
                if (ee) return null;
                if (
                    (0, d.Z)({
                        activities: Z,
                        status: W,
                        applicationStream: H,
                        voiceChannel: eS
                    })
                ) {
                    let e = !(0, E.Z)({
                        activity:
                            null == Z
                                ? void 0
                                : Z.find((e) => {
                                      let { type: t } = e;
                                      return t === C.IIU.CUSTOM_STATUS;
                                  }),
                        user: F,
                        channel: q
                    });
                    return (0, r.jsx)(_.Z, {
                        user: F,
                        activities: Z,
                        applicationStream: H,
                        voiceChannel: eS,
                        animate: eE,
                        hideEmoji: e,
                        hasQuest: null != eP,
                        textClassName: D.activityText
                    });
                }
                return null;
            },
            ej = () =>
                null != L && L && null == j
                    ? (0, r.jsx)(l.ua7, {
                          text: null != M ? M : w.NW.string(w.t.pclUFB),
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
                    : null,
            eU = () =>
                null == z
                    ? null
                    : (0, r.jsx)(l.ua7, {
                          text: w.NW.formatToPlainString(w.t.IWkAq6, { date: z }),
                          children: (e) =>
                              (0, r.jsx)(l.P3F, {
                                  onClick: eo,
                                  tabIndex: -1,
                                  children: (0, r.jsx)(T.Z, k(x({}, e), { className: D.premiumIcon }))
                              })
                      }),
            eG = () => {
                let e = (null == F ? void 0 : F.isClyde()) ? R.Hb.AI : R.Hb.BOT;
                return null != F && F.bot
                    ? (0, r.jsx)(p.Z, {
                          className: D.botTag,
                          type: e,
                          verified: F.isVerifiedBot()
                      })
                    : null;
            },
            eB = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [eG(), ej(), eU()]
                }),
            eF = (e, t) => {
                let n = Y ? l.Xo$ : l.qEK,
                    i = (0, c.Z)(Z) ? C.Skl.STREAMING : W;
                return (
                    (i = t ? void 0 : i),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                n,
                                k(x({}, eA), {
                                    size: l.EFr.SIZE_32,
                                    src: eN,
                                    isMobile: K,
                                    isTyping: G,
                                    status: i,
                                    'aria-label': e.username,
                                    statusTooltip: !0,
                                    avatarDecoration: eT,
                                    typingIndicatorRef: eM
                                })
                            ),
                            (0, r.jsx)(b.Z, {
                                confettiSpawnRef: ey,
                                shouldFire: G && null != V && e.id !== V.id,
                                confettiLocation: P.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eV = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.PUh, {
                            roleName: N,
                            color: null != o ? o : void 0,
                            name: null != B ? B : eh,
                            className: D.name,
                            roleGradient: eD
                        }),
                        !$ &&
                            (0, r.jsx)(m.ZP, {
                                primaryGuild: null == F ? void 0 : F.primaryGuild,
                                userId: null == F ? void 0 : F.id,
                                contextGuildId: Q,
                                disableGuildProfile: !0,
                                className: D.clanTag
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
                                applicationStream: H
                            },
                            e
                        ),
                        { closePopout: () => eR(!0) }
                    )
                ),
            eH = W === C.Skl.OFFLINE;
        return null == F
            ? (0, r.jsx)(h.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: D.placeholder
              })
            : (0, r.jsx)(l.yRy, {
                  targetElementRef: eg,
                  renderPopout: eZ,
                  position: 'bottom',
                  shouldShow: ew,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -U,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          x(
                              {
                                  ref: eg,
                                  selected: n,
                                  className: a()(D.member, X, { [D.offline]: eH && !n }),
                                  innerClassName: D.memberInner,
                                  onClick: er,
                                  onKeyDown: en,
                                  onMouseDown: et,
                                  onContextMenu: ei,
                                  onMouseEnter: eL,
                                  onMouseLeave: ex,
                                  hovered: eE,
                                  name:
                                      null == j
                                          ? (0, r.jsx)('span', {
                                                className: D.username,
                                                children: eV()
                                            })
                                          : (0, r.jsx)(l.ua7, {
                                                text: j,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        k(x({}, e), {
                                                            className: a()(D.username, D.lostPermission),
                                                            children: eV()
                                                        })
                                                    )
                                            }),
                                  avatar: eF(F, eH),
                                  nameplate: J,
                                  subText: ek(),
                                  decorators: eB(),
                                  'aria-controls': es,
                                  'aria-expanded': el,
                                  'aria-setsize': eu,
                                  'aria-posinset': ec,
                                  id: ed,
                                  tabIndex: ef,
                                  onFocus: ea,
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

n.d(t, {
    Z: () => k,
    x: () => w
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(477690),
    l = n(481060),
    u = n(420660),
    c = n(297369),
    d = n(771173),
    f = n(372276),
    _ = n(385499),
    p = n(693728),
    h = n(979264),
    m = n(78891),
    g = n(711406),
    E = n(554300),
    v = n(558602),
    y = n(736144),
    I = n(113434),
    b = n(553393),
    T = n(565640),
    S = n(518950),
    A = n(594174),
    N = n(709586),
    C = n(624138),
    R = n(51144),
    O = n(981631),
    D = n(674563),
    x = n(524484),
    L = n(388032),
    P = n(182605);
let w = (0, C.Mg)(o.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    M = 3,
    k = function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorRoleName: o, isOwner: C, ownerTooltipText: w, lostPermissionTooltipText: k, isTyping: U = !1, nick: G, user: B, currentUser: Z, activities: F, applicationStream: V, status: j, shouldAnimateStatus: H = !1, isMobile: Y, premiumSince: W, channel: K, guildId: z, className: q, namePlate: Q, onMouseDown: X, onKeyDown: J, onClick: $, onContextMenu: ee, onClickPremiumGuildIcon: et, onFocus: en, 'aria-controls': ei, 'aria-expanded': er, 'aria-posinset': ea, 'aria-setsize': es, id: eo, tabIndex: el, itemProps: eu } = e,
            ec = null == B ? void 0 : B.id,
            ed = R.ZP.useName(B),
            ef = (null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === ec,
            e_ = r.useRef(null),
            [ep, eh] = r.useState(!1),
            [em, eg] = r.useState(null),
            eE = (0, T.Z)(ec, 'MemberListItem'),
            {
                avatarDecorationSrc: ev,
                avatarSrc: ey,
                eventHandlers: eI
            } = (0, S.Z)({
                user: B,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || ep),
                guildId: z
            }),
            { canSee: eb } = (0, m.D)('NamePlate'),
            eT = eb && null != Q,
            [eS, eA] = r.useState(!1);
        r.useEffect(() => {
            n && eA(!1);
        }, [n]);
        let eN = (0, I.Fr)(F),
            eC = null != eN && !ef && n && !eS,
            eR = () => {
                eh(!0);
            },
            eO = () => {
                eh(!1);
            },
            eD = (e) => {
                eg(e);
            },
            ex = () => {
                if ((0, c.Z)(F, j)) {
                    let e = !(0, v.Z)({
                        activity: F.find((e) => {
                            let { type: t } = e;
                            return t === O.IIU.CUSTOM_STATUS;
                        }),
                        user: B,
                        channel: K
                    });
                    return (0, i.jsx)(d.Z, {
                        location: 'MemberListItem',
                        user: B,
                        activities: F,
                        applicationStream: V,
                        animate: ep,
                        hideEmoji: e,
                        hasQuest: null != eN,
                        textClassName: P.activityText
                    });
                }
                return null != eE
                    ? (0, i.jsx)(f.Z, {
                          textClassName: P.activityText,
                          entry: eE
                      })
                    : null;
            },
            eL = () =>
                null != C && C && null == k
                    ? (0, i.jsx)(l.ua7, {
                          text: null != w ? w : L.intl.string(L.t.pclUFB),
                          children: (e) =>
                              (0, i.jsx)(l.CEn, {
                                  size: 'md',
                                  color: 'currentColor',
                                  ...e,
                                  className: P.ownerIcon
                              })
                      })
                    : null,
            eP = () =>
                null == W
                    ? null
                    : (0, i.jsx)(l.ua7, {
                          text: L.intl.formatToPlainString(L.t.IWkAq6, { date: W }),
                          children: (e) =>
                              (0, i.jsx)(l.P3F, {
                                  onClick: et,
                                  tabIndex: -1,
                                  children: (0, i.jsx)(N.Z, {
                                      ...e,
                                      className: P.premiumIcon
                                  })
                              })
                      }),
            ew = () => {
                let e = (null == B ? void 0 : B.isClyde()) ? D.Hb.AI : D.Hb.BOT;
                return null != B && B.bot
                    ? (0, i.jsx)(_.Z, {
                          className: P.botTag,
                          type: e,
                          verified: B.isVerifiedBot()
                      })
                    : null;
            },
            eM = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [ew(), eL(), eP()]
                }),
            ek = (e, t) => {
                let n = H ? l.Xo$ : l.qEK,
                    r = (0, u.Z)(F) ? O.Skl.STREAMING : j;
                return (
                    (r = t ? void 0 : r),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(n, {
                                ...eI,
                                size: l.EFr.SIZE_32,
                                src: ey,
                                isMobile: Y,
                                isTyping: U,
                                status: r,
                                'aria-label': e.username,
                                statusTooltip: !0,
                                avatarDecoration: ev,
                                typingIndicatorRef: eD
                            }),
                            (0, i.jsx)(y.Z, {
                                confettiSpawnRef: em,
                                shouldFire: U && null != Z && e.id !== Z.id,
                                confettiLocation: x.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eU = r.useMemo(() => ({ source: O.jXE.MEMBER_LIST }), []),
            eG = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.PUh, {
                            roleName: o,
                            color: null != a ? a : void 0,
                            name: null != G ? G : ed,
                            className: P.name
                        }),
                        (0, i.jsx)(h.ZP, {
                            primaryGuild: null == B ? void 0 : B.primaryGuild,
                            userId: null == B ? void 0 : B.id,
                            contextGuildId: z,
                            disableGuildProfile: !0,
                            className: P.clanTag,
                            profileViewedAnalytics: eU
                        })
                    ]
                }),
            eB = (e) =>
                (0, i.jsx)(b.Z, {
                    quest: eN,
                    memberListItemRef: e_,
                    applicationStream: V,
                    ...e,
                    closePopout: () => eA(!0)
                }),
            eZ = j === O.Skl.OFFLINE;
        return null == B
            ? (0, i.jsx)(p.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: P.placeholder
              })
            : (0, i.jsx)(l.yRy, {
                  renderPopout: eB,
                  position: 'bottom',
                  shouldShow: eC,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -M,
                  children: () =>
                      (0, i.jsx)(g.Z, {
                          namePlate: Q,
                          hover: ep,
                          selected: n,
                          children: (0, i.jsx)(E.Z, {
                              ref: e_,
                              selected: n && !eT,
                              highlighted: n && eT,
                              className: s()(P.member, q, { [P.offline]: eZ && !n }),
                              innerClassName: P.memberInner,
                              onClick: $,
                              onKeyDown: J,
                              onMouseDown: X,
                              onContextMenu: ee,
                              onMouseEnter: eR,
                              onMouseLeave: eO,
                              name:
                                  null == k
                                      ? (0, i.jsx)('span', {
                                            className: P.username,
                                            children: eG()
                                        })
                                      : (0, i.jsx)(l.ua7, {
                                            text: k,
                                            children: (e) =>
                                                (0, i.jsx)('span', {
                                                    ...e,
                                                    className: s()(P.username, P.lostPermission),
                                                    children: eG()
                                                })
                                        }),
                              avatar: ek(B, eZ),
                              subText: ex(),
                              decorators: eM(),
                              'aria-controls': ei,
                              'aria-expanded': er,
                              'aria-setsize': es,
                              'aria-posinset': ea,
                              id: eo,
                              tabIndex: el,
                              onFocus: en,
                              focusProps: {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4
                                  }
                              },
                              ...eu
                          })
                      })
              });
    };

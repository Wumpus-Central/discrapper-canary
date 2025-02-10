n.d(t, {
    Z: () => U,
    x: () => M
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
    E = n(318870),
    v = n(554300),
    y = n(558602),
    I = n(736144),
    T = n(113434),
    b = n(553393),
    S = n(565640),
    A = n(518950),
    N = n(594174),
    C = n(709586),
    R = n(624138),
    O = n(51144),
    D = n(981631),
    L = n(674563),
    x = n(524484),
    w = n(388032),
    P = n(307042);
let M = (0, R.Mg)(o.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    k = 3,
    U = function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorRoleName: o, isOwner: R, ownerTooltipText: M, lostPermissionTooltipText: U, isTyping: G = !1, nick: B, user: Z, currentUser: F, activities: V, applicationStream: j, status: H, shouldAnimateStatus: Y = !1, isMobile: W, premiumSince: K, channel: z, guildId: q, className: Q, namePlate: X, onMouseDown: J, onKeyDown: $, onClick: ee, onContextMenu: et, onClickPremiumGuildIcon: en, onFocus: ei, 'aria-controls': er, 'aria-expanded': ea, 'aria-posinset': es, 'aria-setsize': eo, id: el, tabIndex: eu, itemProps: ec } = e,
            ed = null == Z ? void 0 : Z.id,
            ef = O.ZP.useName(Z),
            e_ = (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === ed,
            ep = r.useRef(null),
            [eh, em] = r.useState(!1),
            [eg, eE] = r.useState(null),
            ev = (0, S.Z)(ed, 'MemberListItem'),
            {
                avatarDecorationSrc: ey,
                avatarSrc: eI,
                eventHandlers: eT
            } = (0, A.Z)({
                user: Z,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || eh),
                guildId: q
            }),
            { canSee: eb } = (0, m.D)('NamePlate'),
            eS = eb && null != X,
            [eA, eN] = r.useState(!1);
        r.useEffect(() => {
            n && eN(!1);
        }, [n]);
        let eC = (0, T.Fr)(V),
            eR = null != eC && !e_ && n && !eA,
            eO = () => {
                em(!0);
            },
            eD = () => {
                em(!1);
            },
            eL = (e) => {
                eE(e);
            },
            ex = () => {
                if ((0, c.Z)(V, H)) {
                    let e = !(0, y.Z)({
                        activity: V.find((e) => {
                            let { type: t } = e;
                            return t === D.IIU.CUSTOM_STATUS;
                        }),
                        user: Z,
                        channel: z
                    });
                    return (0, i.jsx)(d.Z, {
                        location: 'MemberListItem',
                        user: Z,
                        activities: V,
                        applicationStream: j,
                        animate: eh,
                        hideEmoji: e,
                        hasQuest: null != eC,
                        textClassName: P.activityText
                    });
                }
                return null != ev
                    ? (0, i.jsx)(f.Z, {
                          textClassName: P.activityText,
                          entry: ev
                      })
                    : null;
            },
            ew = () =>
                null != R && R && null == U
                    ? (0, i.jsx)(l.ua7, {
                          text: null != M ? M : w.intl.string(w.t.pclUFB),
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
                null == K
                    ? null
                    : (0, i.jsx)(l.ua7, {
                          text: w.intl.formatToPlainString(w.t.IWkAq6, { date: K }),
                          children: (e) =>
                              (0, i.jsx)(l.P3F, {
                                  onClick: en,
                                  tabIndex: -1,
                                  children: (0, i.jsx)(C.Z, {
                                      ...e,
                                      className: P.premiumIcon
                                  })
                              })
                      }),
            eM = () => {
                let e = (null == Z ? void 0 : Z.isClyde()) ? L.Hb.AI : L.Hb.BOT;
                return null != Z && Z.bot
                    ? (0, i.jsx)(_.Z, {
                          className: P.botTag,
                          type: e,
                          verified: Z.isVerifiedBot()
                      })
                    : null;
            },
            ek = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [eM(), ew(), eP()]
                }),
            eU = (e, t) => {
                let n = Y ? l.Xo$ : l.qEK,
                    r = (0, u.Z)(V) ? D.Skl.STREAMING : H;
                return (
                    (r = t ? void 0 : r),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(n, {
                                ...eT,
                                size: l.EFr.SIZE_32,
                                src: eI,
                                isMobile: W,
                                isTyping: G,
                                status: r,
                                'aria-label': e.username,
                                statusTooltip: !0,
                                avatarDecoration: ey,
                                typingIndicatorRef: eL
                            }),
                            (0, i.jsx)(I.Z, {
                                confettiSpawnRef: eg,
                                shouldFire: G && null != F && e.id !== F.id,
                                confettiLocation: x.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eG = r.useMemo(() => ({ source: D.jXE.MEMBER_LIST }), []),
            eB = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.PUh, {
                            roleName: o,
                            color: null != a ? a : void 0,
                            name: null != B ? B : ef,
                            className: P.name
                        }),
                        (0, i.jsx)(h.ZP, {
                            primaryGuild: null == Z ? void 0 : Z.primaryGuild,
                            userId: null == Z ? void 0 : Z.id,
                            contextGuildId: q,
                            disableGuildProfile: !0,
                            className: P.clanTag,
                            profileViewedAnalytics: eG
                        })
                    ]
                }),
            eZ = (e) =>
                (0, i.jsx)(b.Z, {
                    quest: eC,
                    memberListItemRef: ep,
                    applicationStream: j,
                    ...e,
                    closePopout: () => eN(!0)
                }),
            eF = H === D.Skl.OFFLINE;
        return null == Z
            ? (0, i.jsx)(p.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: P.placeholder
              })
            : (0, i.jsx)(l.yRy, {
                  renderPopout: eZ,
                  position: 'bottom',
                  shouldShow: eR,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -k,
                  children: () =>
                      (0, i.jsx)(g.Z, {
                          placement: E.QY.Memberlist,
                          namePlate: X,
                          hover: eh,
                          selected: n,
                          children: (0, i.jsx)(v.Z, {
                              ref: ep,
                              selected: n && !eS,
                              highlighted: n && eS,
                              className: s()(P.member, Q, { [P.offline]: eF && !n }),
                              innerClassName: P.memberInner,
                              onClick: ee,
                              onKeyDown: $,
                              onMouseDown: J,
                              onContextMenu: et,
                              onMouseEnter: eO,
                              onMouseLeave: eD,
                              name:
                                  null == U
                                      ? (0, i.jsx)('span', {
                                            className: P.username,
                                            children: eB()
                                        })
                                      : (0, i.jsx)(l.ua7, {
                                            text: U,
                                            children: (e) =>
                                                (0, i.jsx)('span', {
                                                    ...e,
                                                    className: s()(P.username, P.lostPermission),
                                                    children: eB()
                                                })
                                        }),
                              avatar: eU(Z, eF),
                              subText: ex(),
                              decorators: ek(),
                              'aria-controls': er,
                              'aria-expanded': ea,
                              'aria-setsize': eo,
                              'aria-posinset': es,
                              id: el,
                              tabIndex: eu,
                              onFocus: ei,
                              focusProps: {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4
                                  }
                              },
                              ...ec
                          })
                      })
              });
    };

n.d(t, {
    Z: () => B,
    x: () => U
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(477690),
    l = n(481060),
    u = n(420660),
    c = n(468363),
    d = n(297369),
    f = n(956221),
    _ = n(771173),
    p = n(372276),
    h = n(385499),
    m = n(693728),
    g = n(979264),
    E = n(554300),
    v = n(558602),
    y = n(614185),
    I = n(359135),
    T = n(516817),
    b = n(736144),
    S = n(113434),
    A = n(553393),
    N = n(565640),
    C = n(518950),
    R = n(594174),
    O = n(709586),
    D = n(624138),
    L = n(51144),
    x = n(981631),
    P = n(674563),
    w = n(524484),
    M = n(388032),
    k = n(374958);
let U = (0, D.Mg)(o.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    G = 3,
    B = function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorRoleName: o, isOwner: D, ownerTooltipText: U, lostPermissionTooltipText: B, isTyping: Z = !1, nick: F, user: V, currentUser: j, activities: H, applicationStream: Y, status: W, shouldAnimateStatus: K = !1, isMobile: z, premiumSince: q, channel: Q, guildId: X, className: J, nameplate: $, hideClanTag: ee = !1, hideSubtext: et = !1, onMouseDown: en, onKeyDown: ei, onClick: er, onContextMenu: ea, onClickPremiumGuildIcon: es, onFocus: eo, 'aria-controls': el, 'aria-expanded': eu, 'aria-posinset': ec, 'aria-setsize': ed, id: ef, tabIndex: e_, itemProps: ep } = e,
            eh = null == V ? void 0 : V.id,
            em = L.ZP.useName(V),
            eg = (null === (t = R.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eh,
            eE = r.useRef(null),
            [ev, ey] = r.useState(!1),
            [eI, eT] = r.useState(null),
            { voiceChannel: eb } = (0, f.Z)({
                userId: eh,
                guildId: X,
                surface: 'member-list-item'
            }),
            { voiceActivityStatusEnabled: eS } = (0, c.U)({ location: 'MemberListItem' }),
            eA = eS ? eb : void 0,
            eN = (0, N.Z)(eh, 'MemberListItem'),
            {
                avatarDecorationSrc: eC,
                avatarSrc: eR,
                eventHandlers: eO
            } = (0, C.Z)({
                user: V,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || ev),
                guildId: X
            }),
            eD = (0, y.D)('MemberListItem') && null != $,
            [eL, ex] = r.useState(!1);
        r.useEffect(() => {
            n && ex(!1);
        }, [n]);
        let eP = (0, S.Fr)(H),
            ew = null != eP && !eg && n && !eL,
            eM = () => {
                ey(!0);
            },
            ek = () => {
                ey(!1);
            },
            eU = (e) => {
                eT(e);
            },
            eG = () => {
                if (et) return null;
                if (
                    (0, d.Z)({
                        activities: H,
                        status: W,
                        applicationStream: Y,
                        voiceChannel: eA
                    })
                ) {
                    let e = !(0, v.Z)({
                        activity:
                            null == H
                                ? void 0
                                : H.find((e) => {
                                      let { type: t } = e;
                                      return t === x.IIU.CUSTOM_STATUS;
                                  }),
                        user: V,
                        channel: Q
                    });
                    return (0, i.jsx)(_.Z, {
                        location: 'MemberListItem',
                        user: V,
                        activities: H,
                        applicationStream: Y,
                        voiceChannel: eA,
                        animate: ev,
                        hideEmoji: e,
                        hasQuest: null != eP,
                        textClassName: k.activityText
                    });
                }
                return null != eN
                    ? (0, i.jsx)(p.Z, {
                          textClassName: k.activityText,
                          entry: eN
                      })
                    : null;
            },
            eB = () =>
                null != D && D && null == B
                    ? (0, i.jsx)(l.ua7, {
                          text: null != U ? U : M.intl.string(M.t.pclUFB),
                          children: (e) =>
                              (0, i.jsx)(l.CEn, {
                                  size: 'md',
                                  color: 'currentColor',
                                  ...e,
                                  className: k.ownerIcon
                              })
                      })
                    : null,
            eZ = () =>
                null == q
                    ? null
                    : (0, i.jsx)(l.ua7, {
                          text: M.intl.formatToPlainString(M.t.IWkAq6, { date: q }),
                          children: (e) =>
                              (0, i.jsx)(l.P3F, {
                                  onClick: es,
                                  tabIndex: -1,
                                  children: (0, i.jsx)(O.Z, {
                                      ...e,
                                      className: k.premiumIcon
                                  })
                              })
                      }),
            eF = () => {
                let e = (null == V ? void 0 : V.isClyde()) ? P.Hb.AI : P.Hb.BOT;
                return null != V && V.bot
                    ? (0, i.jsx)(h.Z, {
                          className: k.botTag,
                          type: e,
                          verified: V.isVerifiedBot()
                      })
                    : null;
            },
            eV = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [eF(), eB(), eZ()]
                }),
            ej = (e, t) => {
                let n = K ? l.Xo$ : l.qEK,
                    r = (0, u.Z)(H) ? x.Skl.STREAMING : W;
                return (
                    (r = t ? void 0 : r),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(n, {
                                ...eO,
                                size: l.EFr.SIZE_32,
                                src: eR,
                                isMobile: z,
                                isTyping: Z,
                                status: r,
                                'aria-label': e.username,
                                statusTooltip: !0,
                                avatarDecoration: eC,
                                typingIndicatorRef: eU
                            }),
                            (0, i.jsx)(b.Z, {
                                confettiSpawnRef: eI,
                                shouldFire: Z && null != j && e.id !== j.id,
                                confettiLocation: w.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eH = r.useMemo(() => ({ source: x.jXE.MEMBER_LIST }), []),
            eY = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.PUh, {
                            roleName: o,
                            color: null != a ? a : void 0,
                            name: null != F ? F : em,
                            className: k.name
                        }),
                        !ee &&
                            (0, i.jsx)(g.ZP, {
                                primaryGuild: null == V ? void 0 : V.primaryGuild,
                                userId: null == V ? void 0 : V.id,
                                contextGuildId: X,
                                disableGuildProfile: !0,
                                className: k.clanTag,
                                profileViewedAnalytics: eH
                            })
                    ]
                }),
            eW = (e) =>
                (0, i.jsx)(A.Z, {
                    quest: eP,
                    memberListItemRef: eE,
                    applicationStream: Y,
                    ...e,
                    closePopout: () => ex(!0)
                }),
            eK = W === x.Skl.OFFLINE;
        return null == V
            ? (0, i.jsx)(m.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: k.placeholder
              })
            : (0, i.jsx)(l.yRy, {
                  renderPopout: eW,
                  position: 'bottom',
                  shouldShow: ew,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -G,
                  children: () =>
                      (0, i.jsx)(T.Z, {
                          placement: I.QY.Memberlist,
                          nameplate: $,
                          hover: ev,
                          selected: n,
                          children: (0, i.jsx)(E.Z, {
                              ref: eE,
                              selected: n && !eD,
                              highlighted: n && eD,
                              className: s()(k.member, J, { [k.offline]: eK && !n }),
                              innerClassName: k.memberInner,
                              onClick: er,
                              onKeyDown: ei,
                              onMouseDown: en,
                              onContextMenu: ea,
                              onMouseEnter: eM,
                              onMouseLeave: ek,
                              name:
                                  null == B
                                      ? (0, i.jsx)('span', {
                                            className: k.username,
                                            children: eY()
                                        })
                                      : (0, i.jsx)(l.ua7, {
                                            text: B,
                                            children: (e) =>
                                                (0, i.jsx)('span', {
                                                    ...e,
                                                    className: s()(k.username, k.lostPermission),
                                                    children: eY()
                                                })
                                        }),
                              avatar: ej(V, eK),
                              subText: eG(),
                              decorators: eV(),
                              'aria-controls': el,
                              'aria-expanded': eu,
                              'aria-setsize': ed,
                              'aria-posinset': ec,
                              id: ef,
                              tabIndex: e_,
                              onFocus: eo,
                              focusProps: {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4
                                  }
                              },
                              ...ep
                          })
                      })
              });
    };

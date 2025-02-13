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
    k = n(307042);
let U = (0, D.Mg)(o.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    G = 3,
    B = function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorRoleName: o, isOwner: D, ownerTooltipText: U, lostPermissionTooltipText: B, isTyping: Z = !1, nick: F, user: V, currentUser: j, activities: H, applicationStream: Y, status: W, shouldAnimateStatus: K = !1, isMobile: z, premiumSince: q, channel: Q, guildId: X, className: J, nameplate: $, onMouseDown: ee, onKeyDown: et, onClick: en, onContextMenu: ei, onClickPremiumGuildIcon: er, onFocus: ea, 'aria-controls': es, 'aria-expanded': eo, 'aria-posinset': el, 'aria-setsize': eu, id: ec, tabIndex: ed, itemProps: ef } = e,
            e_ = null == V ? void 0 : V.id,
            ep = L.ZP.useName(V),
            eh = (null === (t = R.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e_,
            em = r.useRef(null),
            [eg, eE] = r.useState(!1),
            [ev, ey] = r.useState(null),
            { voiceChannel: eI } = (0, f.Z)({
                userId: e_,
                guildId: X
            }),
            { voiceActivityStatusEnabled: eT } = (0, c.U)({ location: 'MemberListItem' }),
            eb = eT ? eI : void 0,
            eS = (0, N.Z)(e_, 'MemberListItem'),
            {
                avatarDecorationSrc: eA,
                avatarSrc: eN,
                eventHandlers: eC
            } = (0, C.Z)({
                user: V,
                size: l.EFr.SIZE_32,
                animateOnHover: !(n || eg),
                guildId: X
            }),
            eR = (0, y.D)('MemberListItem') && null != $,
            [eO, eD] = r.useState(!1);
        r.useEffect(() => {
            n && eD(!1);
        }, [n]);
        let eL = (0, S.Fr)(H),
            ex = null != eL && !eh && n && !eO,
            eP = () => {
                eE(!0);
            },
            ew = () => {
                eE(!1);
            },
            eM = (e) => {
                ey(e);
            },
            ek = () => {
                if (
                    (0, d.Z)({
                        activities: H,
                        status: W,
                        applicationStream: Y,
                        voiceChannel: eb
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
                        voiceChannel: eb,
                        animate: eg,
                        hideEmoji: e,
                        hasQuest: null != eL,
                        textClassName: k.activityText
                    });
                }
                return null != eS
                    ? (0, i.jsx)(p.Z, {
                          textClassName: k.activityText,
                          entry: eS
                      })
                    : null;
            },
            eU = () =>
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
            eG = () =>
                null == q
                    ? null
                    : (0, i.jsx)(l.ua7, {
                          text: M.intl.formatToPlainString(M.t.IWkAq6, { date: q }),
                          children: (e) =>
                              (0, i.jsx)(l.P3F, {
                                  onClick: er,
                                  tabIndex: -1,
                                  children: (0, i.jsx)(O.Z, {
                                      ...e,
                                      className: k.premiumIcon
                                  })
                              })
                      }),
            eB = () => {
                let e = (null == V ? void 0 : V.isClyde()) ? P.Hb.AI : P.Hb.BOT;
                return null != V && V.bot
                    ? (0, i.jsx)(h.Z, {
                          className: k.botTag,
                          type: e,
                          verified: V.isVerifiedBot()
                      })
                    : null;
            },
            eZ = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [eB(), eU(), eG()]
                }),
            eF = (e, t) => {
                let n = K ? l.Xo$ : l.qEK,
                    r = (0, u.Z)(H) ? x.Skl.STREAMING : W;
                return (
                    (r = t ? void 0 : r),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(n, {
                                ...eC,
                                size: l.EFr.SIZE_32,
                                src: eN,
                                isMobile: z,
                                isTyping: Z,
                                status: r,
                                'aria-label': e.username,
                                statusTooltip: !0,
                                avatarDecoration: eA,
                                typingIndicatorRef: eM
                            }),
                            (0, i.jsx)(b.Z, {
                                confettiSpawnRef: ev,
                                shouldFire: Z && null != j && e.id !== j.id,
                                confettiLocation: w.Hn.MEMBER_USER
                            })
                        ]
                    })
                );
            },
            eV = r.useMemo(() => ({ source: x.jXE.MEMBER_LIST }), []),
            ej = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.PUh, {
                            roleName: o,
                            color: null != a ? a : void 0,
                            name: null != F ? F : ep,
                            className: k.name
                        }),
                        (0, i.jsx)(g.ZP, {
                            primaryGuild: null == V ? void 0 : V.primaryGuild,
                            userId: null == V ? void 0 : V.id,
                            contextGuildId: X,
                            disableGuildProfile: !0,
                            className: k.clanTag,
                            profileViewedAnalytics: eV
                        })
                    ]
                }),
            eH = (e) =>
                (0, i.jsx)(A.Z, {
                    quest: eL,
                    memberListItemRef: em,
                    applicationStream: Y,
                    ...e,
                    closePopout: () => eD(!0)
                }),
            eY = W === x.Skl.OFFLINE;
        return null == V
            ? (0, i.jsx)(m.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: k.placeholder
              })
            : (0, i.jsx)(l.yRy, {
                  renderPopout: eH,
                  position: 'bottom',
                  shouldShow: ex,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -G,
                  children: () =>
                      (0, i.jsx)(T.Z, {
                          placement: I.QY.Memberlist,
                          nameplate: $,
                          hover: eg,
                          selected: n,
                          children: (0, i.jsx)(E.Z, {
                              ref: em,
                              selected: n && !eR,
                              highlighted: n && eR,
                              className: s()(k.member, J, { [k.offline]: eY && !n }),
                              innerClassName: k.memberInner,
                              onClick: en,
                              onKeyDown: et,
                              onMouseDown: ee,
                              onContextMenu: ei,
                              onMouseEnter: eP,
                              onMouseLeave: ew,
                              name:
                                  null == B
                                      ? (0, i.jsx)('span', {
                                            className: k.username,
                                            children: ej()
                                        })
                                      : (0, i.jsx)(l.ua7, {
                                            text: B,
                                            children: (e) =>
                                                (0, i.jsx)('span', {
                                                    ...e,
                                                    className: s()(k.username, k.lostPermission),
                                                    children: ej()
                                                })
                                        }),
                              avatar: eF(V, eY),
                              subText: ek(),
                              decorators: eZ(),
                              'aria-controls': es,
                              'aria-expanded': eo,
                              'aria-setsize': eu,
                              'aria-posinset': el,
                              id: ec,
                              tabIndex: ed,
                              onFocus: ea,
                              focusProps: {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4
                                  }
                              },
                              ...ef
                          })
                      })
              });
    };

r.d(n, {
    x: function () {
        return w;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(477690),
    c = r(481060),
    d = r(420660),
    f = r(385499),
    _ = r(693728),
    h = r(979264),
    p = r(588688),
    m = r(554300),
    g = r(558602),
    E = r(736144),
    v = r(113434),
    I = r(553393),
    T = r(565640),
    b = r(518950),
    y = r(594174),
    S = r(709586),
    A = r(624138),
    N = r(51144),
    C = r(788307),
    R = r(981631),
    O = r(674563),
    D = r(524484),
    L = r(388032),
    x = r(182605);
let w = (0, A.Mg)(u.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    P = 3;
function M(e) {
    var n;
    let { selected: r = !1, colorString: i, colorRoleName: o, isOwner: u, ownerTooltipText: A, lostPermissionTooltipText: w, isTyping: M = !1, nick: k, user: U, currentUser: B, activities: G, applicationStream: Z, status: F, shouldAnimateStatus: V = !1, isMobile: j, premiumSince: H, channel: Y, guildId: W, className: K, onMouseDown: z, onKeyDown: q, onClick: Q, onContextMenu: X, onClickPremiumGuildIcon: J, onFocus: $, 'aria-controls': ee, 'aria-expanded': et, 'aria-posinset': en, 'aria-setsize': er, id: ei, tabIndex: ea, itemProps: es } = e,
        eo = null == U ? void 0 : U.id,
        el = N.ZP.useName(U),
        eu = (null === (n = y.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === eo,
        ec = s.useRef(null),
        [ed, ef] = s.useState(!1),
        [e_, eh] = s.useState(null),
        ep = (0, T.Z)(eo, 'MemberListItem'),
        {
            avatarDecorationSrc: em,
            avatarSrc: eg,
            eventHandlers: eE
        } = (0, b.Z)({
            user: U,
            size: c.AvatarSizes.SIZE_32,
            animateOnHover: !(r || ed),
            guildId: W
        }),
        [ev, eI] = s.useState(!1);
    s.useEffect(() => {
        r && eI(!1);
    }, [r]);
    let eT = (0, v.Fr)(G),
        eb = null != eT && !eu && r && !ev,
        ey = () => {
            ef(!0);
        },
        eS = () => {
            ef(!1);
        },
        eA = (e) => {
            eh(e);
        },
        eN = () => {
            if (F !== R.Skl.OFFLINE && F !== R.Skl.INVISIBLE && null != G && G.length > 0) {
                let e = null != G ? G.find((e) => e.type === R.IIU.CUSTOM_STATUS) : null,
                    n = null != e && null != U && (0, g.Z)(e, U, Y);
                return (0, a.jsx)(C.ZP, {
                    className: x.activity,
                    textClassName: x.activityText,
                    emojiClassName: x.activityEmoji,
                    activities: G,
                    applicationStream: Z,
                    animate: ed,
                    hideEmoji: !n,
                    hideTooltip: !0,
                    user: U,
                    hasQuest: null != eT
                });
            }
            return null != ep
                ? (0, a.jsx)(p.Z, {
                      className: x.activity,
                      textClassName: x.activityText,
                      entry: ep
                  })
                : null;
        },
        eC = () =>
            null != u && u && null == w
                ? (0, a.jsx)(c.Tooltip, {
                      text: null != A ? A : L.intl.string(L.t.pclUFB),
                      children: (e) =>
                          (0, a.jsx)(c.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: x.ownerIcon
                          })
                  })
                : null,
        eR = () =>
            null == H
                ? null
                : (0, a.jsx)(c.Tooltip, {
                      text: L.intl.formatToPlainString(L.t.IWkAq6, { date: H }),
                      children: (e) =>
                          (0, a.jsx)(c.Clickable, {
                              onClick: J,
                              tabIndex: -1,
                              children: (0, a.jsx)(S.Z, {
                                  ...e,
                                  className: x.premiumIcon
                              })
                          })
                  }),
        eO = () => {
            let e = (null == U ? void 0 : U.isClyde()) ? O.Hb.AI : O.Hb.BOT;
            return null != U && U.bot
                ? (0, a.jsx)(f.Z, {
                      className: x.botTag,
                      type: e,
                      verified: U.isVerifiedBot()
                  })
                : null;
        },
        eD = () =>
            (0, a.jsxs)(a.Fragment, {
                children: [eO(), eC(), eR()]
            }),
        eL = (e, n) => {
            let r = V ? c.AnimatedAvatar : c.Avatar,
                i = (0, d.Z)(G) ? R.Skl.STREAMING : F;
            return (
                (i = n ? void 0 : i),
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(r, {
                            ...eE,
                            size: c.AvatarSizes.SIZE_32,
                            src: eg,
                            isMobile: j,
                            isTyping: M,
                            status: i,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: em,
                            typingIndicatorRef: eA
                        }),
                        (0, a.jsx)(E.Z, {
                            confettiSpawnRef: e_,
                            shouldFire: M && null != B && e.id !== B.id,
                            confettiLocation: D.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        ex = s.useMemo(() => ({ source: R.jXE.MEMBER_LIST }), []),
        ew = () =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(c.NameWithRole, {
                        roleName: o,
                        color: null != i ? i : void 0,
                        name: null != k ? k : el,
                        className: x.name
                    }),
                    (0, a.jsx)(h.ZP, {
                        primaryGuild: null == U ? void 0 : U.primaryGuild,
                        userId: null == U ? void 0 : U.id,
                        contextGuildId: W,
                        disableGuildProfile: !0,
                        className: x.clanTag,
                        profileViewedAnalytics: ex
                    })
                ]
            }),
        eP = (e) =>
            (0, a.jsx)(I.Z, {
                quest: eT,
                memberListItemRef: ec,
                applicationStream: Z,
                ...e,
                closePopout: () => eI(!0)
            }),
        eM = F === R.Skl.OFFLINE;
    return null == U
        ? (0, a.jsx)(_.Z, {
              avatarSize: c.AvatarSizes.SIZE_32,
              className: x.placeholder
          })
        : (0, a.jsx)(c.Popout, {
              renderPopout: eP,
              position: 'bottom',
              shouldShow: eb,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: c.Popout.Animation.NONE,
              spacing: -P,
              children: () =>
                  (0, a.jsx)(m.Z, {
                      ref: ec,
                      selected: r,
                      className: l()(x.member, K, { [x.offline]: eM && !r }),
                      innerClassName: x.memberInner,
                      onClick: Q,
                      onKeyDown: q,
                      onMouseDown: z,
                      onContextMenu: X,
                      onMouseEnter: ey,
                      onMouseLeave: eS,
                      name:
                          null == w
                              ? (0, a.jsx)('span', {
                                    className: x.username,
                                    children: ew()
                                })
                              : (0, a.jsx)(c.Tooltip, {
                                    text: w,
                                    children: (e) =>
                                        (0, a.jsx)('span', {
                                            ...e,
                                            className: l()(x.username, x.lostPermission),
                                            children: ew()
                                        })
                                }),
                      avatar: eL(U, eM),
                      subText: eN(),
                      decorators: eD(),
                      'aria-controls': ee,
                      'aria-expanded': et,
                      'aria-setsize': er,
                      'aria-posinset': en,
                      id: ei,
                      tabIndex: ea,
                      onFocus: $,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...es
                  })
          });
}
n.Z = M;

r.d(n, {
    x: function () {
        return w;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(477690),
    c = r(481060),
    d = r(420660),
    f = r(747017),
    p = r(372276),
    h = r(385499),
    _ = r(693728),
    m = r(979264),
    g = r(554300),
    E = r(558602),
    v = r(736144),
    y = r(113434),
    b = r(553393),
    I = r(565640),
    T = r(518950),
    S = r(594174),
    A = r(709586),
    C = r(624138),
    N = r(51144),
    R = r(981631),
    O = r(674563),
    D = r(524484),
    L = r(388032),
    x = r(182605);
let w = (0, C.Mg)(u.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    P = 3;
function M(e) {
    var n;
    let { selected: r = !1, colorString: i, colorRoleName: s, isOwner: u, ownerTooltipText: C, lostPermissionTooltipText: w, isTyping: M = !1, nick: k, user: U, currentUser: B, activities: G, applicationStream: Z, status: F, shouldAnimateStatus: V = !1, isMobile: j, premiumSince: H, channel: Y, guildId: W, className: K, onMouseDown: z, onKeyDown: q, onClick: Q, onContextMenu: X, onClickPremiumGuildIcon: J, onFocus: $, 'aria-controls': ee, 'aria-expanded': et, 'aria-posinset': en, 'aria-setsize': er, id: ei, tabIndex: ea, itemProps: eo } = e,
        es = null == U ? void 0 : U.id,
        el = N.ZP.useName(U),
        eu = (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === es,
        ec = o.useRef(null),
        [ed, ef] = o.useState(!1),
        [ep, eh] = o.useState(null),
        e_ = (0, I.Z)(es, 'MemberListItem'),
        {
            avatarDecorationSrc: em,
            avatarSrc: eg,
            eventHandlers: eE
        } = (0, T.Z)({
            user: U,
            size: c.AvatarSizes.SIZE_32,
            animateOnHover: !(r || ed),
            guildId: W
        }),
        [ev, ey] = o.useState(!1);
    o.useEffect(() => {
        r && ey(!1);
    }, [r]);
    let eb = (0, y.Fr)(G),
        eI = null != eb && !eu && r && !ev,
        eT = () => {
            ef(!0);
        },
        eS = () => {
            ef(!1);
        },
        eA = (e) => {
            eh(e);
        },
        eC = () => {
            if (F !== R.Skl.OFFLINE && F !== R.Skl.INVISIBLE && null != G && G.length > 0) {
                let e = null != G ? G.find((e) => e.type === R.IIU.CUSTOM_STATUS) : null,
                    n = null != e && null != U && (0, E.Z)(e, U, Y);
                return (0, a.jsx)(f.Z, {
                    className: x.activity,
                    textClassName: x.activityText,
                    emojiClassName: x.activityEmoji,
                    activities: G,
                    applicationStream: Z,
                    animate: ed,
                    hideEmoji: !n,
                    hideTooltip: !0,
                    user: U,
                    hasQuest: null != eb
                });
            }
            return null != e_
                ? (0, a.jsx)(p.Z, {
                      className: x.activity,
                      textClassName: x.activityText,
                      entry: e_
                  })
                : null;
        },
        eN = () =>
            null != u && u && null == w
                ? (0, a.jsx)(c.Tooltip, {
                      text: null != C ? C : L.intl.string(L.t.pclUFB),
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
                              children: (0, a.jsx)(A.Z, {
                                  ...e,
                                  className: x.premiumIcon
                              })
                          })
                  }),
        eO = () => {
            let e = (null == U ? void 0 : U.isClyde()) ? O.Hb.AI : O.Hb.BOT;
            return null != U && U.bot
                ? (0, a.jsx)(h.Z, {
                      className: x.botTag,
                      type: e,
                      verified: U.isVerifiedBot()
                  })
                : null;
        },
        eD = () =>
            (0, a.jsxs)(a.Fragment, {
                children: [eO(), eN(), eR()]
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
                        (0, a.jsx)(v.Z, {
                            confettiSpawnRef: ep,
                            shouldFire: M && null != B && e.id !== B.id,
                            confettiLocation: D.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        ex = o.useMemo(() => ({ source: R.jXE.MEMBER_LIST }), []),
        ew = () =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(c.NameWithRole, {
                        roleName: s,
                        color: null != i ? i : void 0,
                        name: null != k ? k : el,
                        className: x.name
                    }),
                    (0, a.jsx)(m.ZP, {
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
            (0, a.jsx)(b.Z, {
                quest: eb,
                memberListItemRef: ec,
                applicationStream: Z,
                ...e,
                closePopout: () => ey(!0)
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
              shouldShow: eI,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: c.Popout.Animation.NONE,
              spacing: -P,
              children: () =>
                  (0, a.jsx)(g.Z, {
                      ref: ec,
                      selected: r,
                      className: l()(x.member, K, { [x.offline]: eM && !r }),
                      innerClassName: x.memberInner,
                      onClick: Q,
                      onKeyDown: q,
                      onMouseDown: z,
                      onContextMenu: X,
                      onMouseEnter: eT,
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
                      subText: eC(),
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
                      ...eo
                  })
          });
}
n.Z = M;

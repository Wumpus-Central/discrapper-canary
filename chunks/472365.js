s.d(t, {
    Z: function () {
        return G;
    }
}),
    s(411104);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    o = s.n(r),
    l = s(990547),
    a = s(399606),
    c = s(481060),
    d = s(588705),
    u = s(700582),
    h = s(100527),
    E = s(906732),
    p = s(388905),
    m = s(792766),
    _ = s(600164),
    g = s(436774),
    C = s(313201),
    N = s(44609),
    f = s(731971),
    b = s(451603),
    R = s(885714),
    I = s(973616),
    S = s(594174),
    T = s(855981),
    x = s(55543),
    O = s(626135),
    y = s(768581),
    A = s(358085),
    M = s(998502),
    L = s(379164),
    P = s(590965),
    v = s(981631),
    D = s(474936),
    U = s(388032),
    Z = s(939661),
    w = s(232186);
function k() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, E.ZP)(h.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: D.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: v.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, n.jsxs)(c.Clickable, {
            onClick: () =>
                (0, R.Z)({
                    analyticsSource: { page: v.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: v.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: v.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: Z.experimentUpsellError,
            children: [
                (0, n.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    className: Z.experimentUpsellIcon,
                    color: g.JX.PREMIUM_TIER_2
                }),
                (0, n.jsx)('span', {
                    className: Z.experimentUpsellText,
                    children: U.intl.string(U.t['4/W4Pz'])
                }),
                (0, n.jsx)('span', {
                    className: Z.experimentGetNitro,
                    children: U.intl.string(U.t.b6KOkJ)
                })
            ]
        })
    );
}
function j(e) {
    let { className: t } = e;
    return (0, n.jsxs)('div', {
        'aria-hidden': 'true',
        className: o()(Z.iconContainer, t),
        children: [
            (0, n.jsx)(T.Z, { className: Z.iconSparklePlus }),
            (0, n.jsx)(c.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                className: Z.iconLink,
                width: 40,
                height: 40
            }),
            (0, n.jsx)(x.Z, { className: Z.iconSparkleStar })
        ]
    });
}
function H(e) {
    let { transitionState: t } = e,
        s = (0, C.Dt)(),
        { analyticsLocations: i } = (0, E.ZP)(h.Z.INVITE_MODAL);
    return (0, n.jsx)(E.Gt, {
        value: i,
        children: (0, n.jsx)(c.ModalRoot, {
            'aria-labelledby': s,
            transitionState: t,
            children: (0, n.jsxs)(c.ModalContent, {
                className: Z.errorContent,
                children: [
                    (0, n.jsx)(j, { className: Z.errorImage }),
                    (0, n.jsx)(c.Heading, {
                        id: s,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: U.intl.string(U.t.u9zxnZ)
                    }),
                    (0, n.jsx)('div', {
                        className: Z.errorBody,
                        children: U.intl.string(U.t.FWkU6O)
                    }),
                    (0, n.jsx)(p.zx, {
                        size: p.zx.Sizes.LARGE,
                        onClick: () => L.Z.close(),
                        color: p.zx.Colors.BRAND,
                        children: U.intl.string(U.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function G(e) {
    let t,
        s,
        r,
        { transitionState: o } = e,
        g = (0, N.WR)({ location: 'AcceptInviteModal' });
    (0, a.e7)([S.default], () => {
        var e;
        return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let R = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: T, error: x, submitting: O } = (0, a.cj)([P.Z], () => P.Z.getProps()),
        { nickname: D } = (0, f.XW)();
    i.useEffect(() => {
        !__OVERLAY__ && A.isPlatformEmbedded && ((0, A.isWindows)() ? M.ZP.minimize() : M.ZP.restore(), M.ZP.focus());
    }, []);
    let j = (0, C.Dt)(),
        { analyticsLocations: G } = (0, E.ZP)(h.Z.INVITE_MODAL);
    if (null == T || null == R) return null;
    if (T.state === v.r2o.EXPIRED || T.state === v.r2o.BANNED || T.state === v.r2o.ERROR) return (0, n.jsx)(H, { transitionState: o });
    if (null == T.channel) return null;
    function V() {
        null != T && L.Z.acceptInvite(T);
    }
    let { guild: K, channel: W, inviter: Y, target_application: F } = T,
        z = null != K,
        X = null != T.stage_instance,
        Q = null == T.guild && null == T.channel && null != T.inviter;
    if (null != F) (t = null == K ? void 0 : K.name), (s = I.ZP.createFromServer(F).getCoverImageURL(1024));
    else if (null != K)
        (t = K.name),
            (s = y.ZP.getGuildSplashURL({
                id: K.id,
                splash: K.splash
            }));
    else if (((null == (t = W.name) || '' === t) && null != Y && (t = Y.username), null == t)) throw Error('no name for group DM invite');
    let B = (0, b.yU)();
    return (
        (r = X ? U.intl.string(U.t['5UKyUl']) : g ? U.intl.format(U.t['9sWQNT'], { usernameHook: () => (0, n.jsx)('span', { children: null != D && '' !== D.trim() ? D : R.globalName }) }) : Q ? U.intl.string(U.t['e/6Ogo']) : U.intl.format(U.t.QD7BDA, { guildName: t })),
        (0, n.jsx)(E.Gt, {
            value: G,
            children: (0, n.jsxs)(c.ModalRoot, {
                size: c.ModalSize.DYNAMIC,
                'aria-labelledby': j,
                transitionState: o,
                className: Z.container,
                impression: {
                    impressionName: l.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == K ? void 0 : K.id,
                        invite_code: T.code
                    }
                },
                children: [
                    (0, n.jsx)(c.ModalContent, {
                        className: Z.contentWrapper,
                        children: (0, n.jsxs)(_.Z, {
                            className: Z.inviteContent,
                            direction: _.Z.Direction.VERTICAL,
                            justify: _.Z.Justify.BETWEEN,
                            children: [
                                (0, n.jsx)('div', {
                                    id: j,
                                    children: (0, n.jsx)(d.Z, {
                                        invite: T,
                                        disableUser: z,
                                        error: x
                                    })
                                }),
                                X && null != K
                                    ? (0, n.jsx)('div', {
                                          className: Z.stage,
                                          children: (0, n.jsx)(m.Z, {
                                              isCard: !0,
                                              stageInstance: T.stage_instance,
                                              guild: K
                                          })
                                      })
                                    : null,
                                (0, n.jsxs)('div', {
                                    className: Z.ctas,
                                    children: [
                                        B ? (0, n.jsx)(k, {}) : null,
                                        null == F
                                            ? (0, n.jsx)(c.Tooltip, {
                                                  text: B ? U.intl.string(U.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: s } = e;
                                                      return (0, n.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: V,
                                                          submitting: O,
                                                          disabled: B,
                                                          color: X ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                                                          onMouseEnter: t,
                                                          onMouseLeave: s,
                                                          children: B
                                                              ? U.intl.string(U.t.ZNCziI)
                                                              : (0, n.jsxs)('div', {
                                                                    className: Z.acceptAs,
                                                                    children: [
                                                                        g &&
                                                                            (0, n.jsx)(u.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.AvatarSizes.SIZE_16,
                                                                                user: R
                                                                            }),
                                                                        r
                                                                    ]
                                                                })
                                                      });
                                                  }
                                              })
                                            : (0, n.jsxs)('div', {
                                                  className: Z.buttonGroup,
                                                  children: [
                                                      (0, n.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: V,
                                                          submitting: O,
                                                          children: U.intl.string(U.t.RscU7O)
                                                      }),
                                                      (0, n.jsx)(p.zx, {
                                                          color: p.zx.Colors.PRIMARY,
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: V,
                                                          submitting: O,
                                                          children: U.intl.string(U.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, n.jsx)(_.Z, {
                                            justify: _.Z.Justify.CENTER,
                                            className: w.marginTop8,
                                            children: (0, n.jsx)(p.zx, {
                                                look: p.zx.Looks.LINK,
                                                className: Z.noThanksButton,
                                                onClick: function () {
                                                    L.Z.close();
                                                },
                                                color: p.zx.Colors.TRANSPARENT,
                                                children: U.intl.string(U.t.ndsK4e)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    null != s &&
                        (0, n.jsx)('div', {
                            className: Z.inviteSplash,
                            style: { backgroundImage: 'url('.concat(s, ')') }
                        })
                ]
            })
        })
    );
}

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
    _ = s(792766),
    m = s(600164),
    g = s(436774),
    C = s(313201),
    N = s(44609),
    f = s(731971),
    b = s(451603),
    I = s(885714),
    R = s(973616),
    S = s(594174),
    T = s(855981),
    x = s(55543),
    y = s(626135),
    M = s(768581),
    A = s(358085),
    O = s(998502),
    P = s(379164),
    L = s(590965),
    v = s(981631),
    D = s(474936),
    U = s(388032),
    Z = s(939661),
    w = s(232186);
function k() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, E.ZP)(h.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            y.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: D.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: v.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, n.jsxs)(c.Clickable, {
            onClick: () =>
                (0, I.Z)({
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
                        onClick: () => P.Z.close(),
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
    let I = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: T, error: x, submitting: D } = (0, a.cj)([L.Z], () => L.Z.getProps()),
        { nickname: j } = (0, f.XW)();
    i.useEffect(() => {
        !__OVERLAY__ && A.isPlatformEmbedded && ((0, A.isWindows)() ? O.ZP.minimize() : O.ZP.restore(), O.ZP.focus());
    }, []);
    let G = (0, C.Dt)(),
        { analyticsLocations: V } = (0, E.ZP)(h.Z.INVITE_MODAL);
    if (null == T || null == I) return null;
    if (T.state === v.r2o.EXPIRED || T.state === v.r2o.BANNED || T.state === v.r2o.ERROR) return (0, n.jsx)(H, { transitionState: o });
    if (null == T.channel) return null;
    function K() {
        null != T && P.Z.acceptInvite(T);
    }
    let { guild: W, channel: Y, inviter: F, target_application: z } = T,
        X = null != W,
        Q = null != T.stage_instance,
        B = null == T.guild && null == T.channel && null != T.inviter;
    if (null != z) (t = null == W ? void 0 : W.name), (s = R.ZP.createFromServer(z).getCoverImageURL(1024));
    else if (null != W)
        (t = W.name),
            (s = M.ZP.getGuildSplashURL({
                id: W.id,
                splash: W.splash
            }));
    else if (((null == (t = Y.name) || '' === t) && null != F && (t = F.username), null == t)) throw Error('no name for group DM invite');
    let q = (0, b.yU)();
    return (
        (r = Q ? U.intl.string(U.t['5UKyUl']) : g ? U.intl.format(U.t['9sWQNT'], { usernameHook: () => (0, n.jsx)('span', { children: null != j && '' !== j.trim() ? j : I.globalName }) }) : B ? U.intl.string(U.t['e/6Ogo']) : U.intl.format(U.t.QD7BDA, { guildName: t })),
        (0, n.jsx)(E.Gt, {
            value: V,
            children: (0, n.jsxs)(c.ModalRoot, {
                size: c.ModalSize.DYNAMIC,
                'aria-labelledby': G,
                transitionState: o,
                className: Z.container,
                impression: {
                    impressionName: l.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == W ? void 0 : W.id,
                        invite_code: T.code
                    }
                },
                children: [
                    (0, n.jsx)(c.ModalContent, {
                        className: Z.contentWrapper,
                        children: (0, n.jsxs)(m.Z, {
                            className: Z.inviteContent,
                            direction: m.Z.Direction.VERTICAL,
                            justify: m.Z.Justify.BETWEEN,
                            children: [
                                (0, n.jsx)('div', {
                                    id: G,
                                    children: (0, n.jsx)(d.Z, {
                                        invite: T,
                                        disableUser: X,
                                        error: x
                                    })
                                }),
                                Q && null != W
                                    ? (0, n.jsx)('div', {
                                          className: Z.stage,
                                          children: (0, n.jsx)(_.Z, {
                                              isCard: !0,
                                              stageInstance: T.stage_instance,
                                              guild: W
                                          })
                                      })
                                    : null,
                                (0, n.jsxs)('div', {
                                    className: Z.ctas,
                                    children: [
                                        q ? (0, n.jsx)(k, {}) : null,
                                        null == z
                                            ? (0, n.jsx)(c.Tooltip, {
                                                  text: q ? U.intl.string(U.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: s } = e;
                                                      return (0, n.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: K,
                                                          submitting: D,
                                                          disabled: q,
                                                          color: Q ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                                                          onMouseEnter: t,
                                                          onMouseLeave: s,
                                                          children: q
                                                              ? U.intl.string(U.t.ZNCziI)
                                                              : (0, n.jsxs)('div', {
                                                                    className: Z.acceptAs,
                                                                    children: [
                                                                        g &&
                                                                            (0, n.jsx)(u.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.AvatarSizes.SIZE_16,
                                                                                user: I
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
                                                          onClick: K,
                                                          submitting: D,
                                                          children: U.intl.string(U.t.RscU7O)
                                                      }),
                                                      (0, n.jsx)(p.zx, {
                                                          color: p.zx.Colors.PRIMARY,
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: K,
                                                          submitting: D,
                                                          children: U.intl.string(U.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, n.jsx)(m.Z, {
                                            justify: m.Z.Justify.CENTER,
                                            className: w.marginTop8,
                                            children: (0, n.jsx)(p.zx, {
                                                look: p.zx.Looks.LINK,
                                                className: Z.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    y.default.track(v.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == T ? void 0 : T.code,
                                                        guild_id: null == T ? void 0 : null === (e = T.guild) || void 0 === e ? void 0 : e.id
                                                    }),
                                                        P.Z.close();
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

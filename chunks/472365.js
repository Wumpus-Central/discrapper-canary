n.d(t, { Z: () => G }), n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(990547),
    a = n(399606),
    c = n(481060),
    d = n(588705),
    u = n(700582),
    _ = n(100527),
    E = n(906732),
    h = n(388905),
    p = n(792766),
    I = n(600164),
    m = n(436774),
    T = n(313201),
    C = n(44609),
    N = n(731971),
    g = n(451603),
    S = n(885714),
    f = n(973616),
    R = n(594174),
    A = n(855981),
    O = n(55543),
    L = n(626135),
    P = n(768581),
    x = n(358085),
    b = n(998502),
    D = n(379164),
    M = n(590965),
    v = n(981631),
    U = n(474936),
    y = n(388032),
    k = n(939661),
    Z = n(232186);
function V() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, E.ZP)(_.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            L.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: U.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: v.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, i.jsxs)(c.P3F, {
            onClick: () =>
                (0, S.Z)({
                    analyticsSource: { page: v.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: v.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: v.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: k.experimentUpsellError,
            children: [
                (0, i.jsx)(c.SrA, {
                    size: 'md',
                    className: k.experimentUpsellIcon,
                    color: m.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: k.experimentUpsellText,
                    children: y.intl.string(y.t['4/W4Pz'])
                }),
                (0, i.jsx)('span', {
                    className: k.experimentGetNitro,
                    children: y.intl.string(y.t.b6KOkJ)
                })
            ]
        })
    );
}
function j(e) {
    let { className: t } = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: s()(k.iconContainer, t),
        children: [
            (0, i.jsx)(A.Z, { className: k.iconSparklePlus }),
            (0, i.jsx)(c.xPt, {
                size: 'custom',
                color: 'currentColor',
                className: k.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(O.Z, { className: k.iconSparkleStar })
        ]
    });
}
function w(e) {
    let { transitionState: t } = e,
        n = (0, T.Dt)(),
        { analyticsLocations: l } = (0, E.ZP)(_.Z.INVITE_MODAL);
    return (0, i.jsx)(E.Gt, {
        value: l,
        children: (0, i.jsx)(c.Y0X, {
            'aria-labelledby': n,
            transitionState: t,
            children: (0, i.jsxs)(c.hzk, {
                className: k.errorContent,
                children: [
                    (0, i.jsx)(j, { className: k.errorImage }),
                    (0, i.jsx)(c.X6q, {
                        id: n,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: y.intl.string(y.t.u9zxnZ)
                    }),
                    (0, i.jsx)('div', {
                        className: k.errorBody,
                        children: y.intl.string(y.t.FWkU6O)
                    }),
                    (0, i.jsx)(h.zx, {
                        size: h.zx.Sizes.LARGE,
                        onClick: () => D.Z.close(),
                        color: h.zx.Colors.BRAND,
                        children: y.intl.string(y.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function G(e) {
    let t,
        n,
        r,
        { transitionState: s } = e,
        m = (0, C.WR)({ location: 'AcceptInviteModal' });
    (0, a.e7)([R.default], () => {
        var e;
        return null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let S = (0, a.e7)([R.default], () => R.default.getCurrentUser()),
        { invite: A, error: O, submitting: U } = (0, a.cj)([M.Z], () => M.Z.getProps());
    l.useEffect(() => {
        var e;
        (0, N.pB)(null !== (e = null == A ? void 0 : A.approximate_member_count) && void 0 !== e ? e : 0);
    }, [null == A ? void 0 : A.approximate_member_count]);
    let { nickname: j } = (0, N.XW)();
    l.useEffect(() => {
        !__OVERLAY__ && x.isPlatformEmbedded && ((0, x.isWindows)() ? b.ZP.minimize() : b.ZP.restore(), b.ZP.focus());
    }, []);
    let G = (0, T.Dt)(),
        { analyticsLocations: F } = (0, E.ZP)(_.Z.INVITE_MODAL);
    if (null == A || null == S) return null;
    if (A.state === v.r2o.EXPIRED || A.state === v.r2o.BANNED || A.state === v.r2o.ERROR) return (0, i.jsx)(w, { transitionState: s });
    if (null == A.channel) return null;
    function B() {
        null != A && D.Z.acceptInvite(A);
    }
    let { guild: H, channel: W, inviter: z, target_application: Y } = A,
        K = null != H,
        X = null != A.stage_instance,
        q = null == A.guild && null == A.channel && null != A.inviter;
    if (null != Y) (t = null == H ? void 0 : H.name), (n = f.ZP.createFromServer(Y).getCoverImageURL(1024));
    else if (null != H)
        (t = H.name),
            (n = P.ZP.getGuildSplashURL({
                id: H.id,
                splash: H.splash
            }));
    else if (((null == (t = W.name) || '' === t) && null != z && (t = z.username), null == t)) throw Error('no name for group DM invite');
    let Q = (0, g.yU)();
    return (
        (r = X ? y.intl.string(y.t['5UKyUl']) : m ? y.intl.format(y.t['9sWQNT'], { usernameHook: () => (0, i.jsx)('span', { children: null != j && '' !== j.trim() ? j : S.globalName }) }) : q ? y.intl.string(y.t['e/6Ogo']) : y.intl.format(y.t.QD7BDA, { guildName: t })),
        (0, i.jsx)(E.Gt, {
            value: F,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                'aria-labelledby': G,
                transitionState: s,
                className: k.container,
                impression: {
                    impressionName: o.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == H ? void 0 : H.id,
                        invite_code: A.code
                    }
                },
                children: [
                    (0, i.jsx)(c.hzk, {
                        className: k.contentWrapper,
                        children: (0, i.jsxs)(I.Z, {
                            className: k.inviteContent,
                            direction: I.Z.Direction.VERTICAL,
                            justify: I.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)('div', {
                                    id: G,
                                    children: (0, i.jsx)(d.Z, {
                                        invite: A,
                                        disableUser: K,
                                        error: O
                                    })
                                }),
                                X && null != H
                                    ? (0, i.jsx)('div', {
                                          className: k.stage,
                                          children: (0, i.jsx)(p.Z, {
                                              isCard: !0,
                                              stageInstance: A.stage_instance,
                                              guild: H
                                          })
                                      })
                                    : null,
                                (0, i.jsxs)('div', {
                                    className: k.ctas,
                                    children: [
                                        Q ? (0, i.jsx)(V, {}) : null,
                                        null == Y
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: Q ? y.intl.string(y.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                                      return (0, i.jsx)(h.zx, {
                                                          size: h.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: U,
                                                          disabled: Q,
                                                          color: X ? h.zx.Colors.GREEN : h.zx.Colors.BRAND,
                                                          onMouseEnter: t,
                                                          onMouseLeave: n,
                                                          children: Q
                                                              ? y.intl.string(y.t.ZNCziI)
                                                              : (0, i.jsxs)('div', {
                                                                    className: k.acceptAs,
                                                                    children: [
                                                                        m &&
                                                                            (0, i.jsx)(u.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.EFr.SIZE_16,
                                                                                user: S,
                                                                                className: k.acceptAsAvatar
                                                                            }),
                                                                        (0, i.jsx)('span', {
                                                                            className: k.acceptAsName,
                                                                            children: r
                                                                        })
                                                                    ]
                                                                })
                                                      });
                                                  }
                                              })
                                            : (0, i.jsxs)('div', {
                                                  className: k.buttonGroup,
                                                  children: [
                                                      (0, i.jsx)(h.zx, {
                                                          size: h.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: U,
                                                          children: y.intl.string(y.t.RscU7O)
                                                      }),
                                                      (0, i.jsx)(h.zx, {
                                                          color: h.zx.Colors.PRIMARY,
                                                          size: h.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: U,
                                                          children: y.intl.string(y.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, i.jsx)(I.Z, {
                                            justify: I.Z.Justify.CENTER,
                                            className: Z.marginTop8,
                                            children: (0, i.jsx)(h.zx, {
                                                look: h.zx.Looks.LINK,
                                                className: k.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    L.default.track(v.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == A ? void 0 : A.code,
                                                        guild_id: null == A ? void 0 : null === (e = A.guild) || void 0 === e ? void 0 : e.id
                                                    }),
                                                        D.Z.close();
                                                },
                                                color: h.zx.Colors.TRANSPARENT,
                                                children: y.intl.string(y.t.ndsK4e)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: k.inviteSplash,
                            style: { backgroundImage: 'url('.concat(n, ')') }
                        })
                ]
            })
        })
    );
}

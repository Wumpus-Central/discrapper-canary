n.d(t, { Z: () => w }), n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(990547),
    o = n(399606),
    c = n(481060),
    d = n(588705),
    u = n(700582),
    _ = n(100527),
    E = n(906732),
    h = n(388905),
    p = n(792766),
    I = n(600164),
    m = n(436774),
    C = n(313201),
    T = n(44609),
    N = n(731971),
    g = n(451603),
    S = n(885714),
    R = n(973616),
    f = n(594174),
    A = n(855981),
    O = n(55543),
    L = n(626135),
    b = n(768581),
    P = n(358085),
    x = n(998502),
    D = n(379164),
    M = n(590965),
    v = n(981631),
    U = n(474936),
    k = n(388032),
    y = n(939661),
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
            className: y.experimentUpsellError,
            children: [
                (0, i.jsx)(c.SrA, {
                    size: 'md',
                    className: y.experimentUpsellIcon,
                    color: m.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: y.experimentUpsellText,
                    children: k.intl.string(k.t['4/W4Pz'])
                }),
                (0, i.jsx)('span', {
                    className: y.experimentGetNitro,
                    children: k.intl.string(k.t.b6KOkJ)
                })
            ]
        })
    );
}
function j(e) {
    let { className: t } = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: s()(y.iconContainer, t),
        children: [
            (0, i.jsx)(A.Z, { className: y.iconSparklePlus }),
            (0, i.jsx)(c.xPt, {
                size: 'custom',
                color: 'currentColor',
                className: y.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(O.Z, { className: y.iconSparkleStar })
        ]
    });
}
function F(e) {
    let { transitionState: t } = e,
        n = (0, C.Dt)(),
        { analyticsLocations: l } = (0, E.ZP)(_.Z.INVITE_MODAL);
    return (0, i.jsx)(E.Gt, {
        value: l,
        children: (0, i.jsx)(c.Y0X, {
            'aria-labelledby': n,
            transitionState: t,
            children: (0, i.jsxs)(c.hzk, {
                className: y.errorContent,
                children: [
                    (0, i.jsx)(j, { className: y.errorImage }),
                    (0, i.jsx)(c.X6q, {
                        id: n,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: k.intl.string(k.t.u9zxnZ)
                    }),
                    (0, i.jsx)('div', {
                        className: y.errorBody,
                        children: k.intl.string(k.t.FWkU6O)
                    }),
                    (0, i.jsx)(h.zx, {
                        size: h.zx.Sizes.LARGE,
                        onClick: () => D.Z.close(),
                        color: h.zx.Colors.BRAND,
                        children: k.intl.string(k.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function w(e) {
    let t,
        n,
        r,
        { transitionState: s } = e,
        m = (0, T.WR)({ location: 'AcceptInviteModal' });
    (0, o.e7)([f.default], () => {
        var e;
        return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let S = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        { invite: A, error: O, submitting: U } = (0, o.cj)([M.Z], () => M.Z.getProps());
    l.useEffect(() => {
        var e;
        (0, N.pB)(null !== (e = null == A ? void 0 : A.approximate_member_count) && void 0 !== e ? e : 0);
    }, [null == A ? void 0 : A.approximate_member_count]);
    let { nickname: j } = (0, N.XW)();
    l.useEffect(() => {
        !__OVERLAY__ && P.isPlatformEmbedded && ((0, P.isWindows)() ? x.ZP.minimize() : x.ZP.restore(), x.ZP.focus());
    }, []);
    let w = (0, C.Dt)(),
        { analyticsLocations: G } = (0, E.ZP)(_.Z.INVITE_MODAL);
    if (null == A || null == S) return null;
    if (A.state === v.r2o.EXPIRED || A.state === v.r2o.BANNED || A.state === v.r2o.ERROR) return (0, i.jsx)(F, { transitionState: s });
    if (null == A.channel) return null;
    function B() {
        null != A && D.Z.acceptInvite(A);
    }
    let { guild: H, channel: W, inviter: z, target_application: Y } = A,
        K = null != H,
        X = null != A.stage_instance,
        q = null == A.guild && null == A.channel && null != A.inviter;
    if (null != Y) (t = null == H ? void 0 : H.name), (n = R.ZP.createFromServer(Y).getCoverImageURL(1024));
    else if (null != H)
        (t = H.name),
            (n = b.ZP.getGuildSplashURL({
                id: H.id,
                splash: H.splash
            }));
    else if (((null == (t = W.name) || '' === t) && null != z && (t = z.username), null == t)) throw Error('no name for group DM invite');
    let Q = (0, g.yU)();
    return (
        (r = X ? k.intl.string(k.t['5UKyUl']) : m ? k.intl.format(k.t['9sWQNT'], { usernameHook: () => (0, i.jsx)('span', { children: null != j && '' !== j.trim() ? j : S.globalName }) }) : q ? k.intl.string(k.t['e/6Ogo']) : k.intl.format(k.t.QD7BDA, { guildName: t })),
        (0, i.jsx)(E.Gt, {
            value: G,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                'aria-labelledby': w,
                transitionState: s,
                className: y.container,
                impression: {
                    impressionName: a.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == H ? void 0 : H.id,
                        invite_code: A.code
                    }
                },
                children: [
                    (0, i.jsx)(c.hzk, {
                        className: y.contentWrapper,
                        children: (0, i.jsxs)(I.Z, {
                            className: y.inviteContent,
                            direction: I.Z.Direction.VERTICAL,
                            justify: I.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)('div', {
                                    id: w,
                                    children: (0, i.jsx)(d.Z, {
                                        invite: A,
                                        disableUser: K,
                                        error: O
                                    })
                                }),
                                X && null != H
                                    ? (0, i.jsx)('div', {
                                          className: y.stage,
                                          children: (0, i.jsx)(p.Z, {
                                              isCard: !0,
                                              stageInstance: A.stage_instance,
                                              guild: H
                                          })
                                      })
                                    : null,
                                (0, i.jsxs)('div', {
                                    className: y.ctas,
                                    children: [
                                        Q ? (0, i.jsx)(V, {}) : null,
                                        null == Y
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: Q ? k.intl.string(k.t.iLyuDA) : null,
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
                                                              ? k.intl.string(k.t.ZNCziI)
                                                              : (0, i.jsxs)('div', {
                                                                    className: y.acceptAs,
                                                                    children: [
                                                                        m &&
                                                                            (0, i.jsx)(u.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.EFr.SIZE_16,
                                                                                user: S,
                                                                                className: y.acceptAsAvatar
                                                                            }),
                                                                        (0, i.jsx)('span', {
                                                                            className: y.acceptAsName,
                                                                            children: r
                                                                        })
                                                                    ]
                                                                })
                                                      });
                                                  }
                                              })
                                            : (0, i.jsxs)('div', {
                                                  className: y.buttonGroup,
                                                  children: [
                                                      (0, i.jsx)(h.zx, {
                                                          size: h.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: U,
                                                          children: k.intl.string(k.t.RscU7O)
                                                      }),
                                                      (0, i.jsx)(h.zx, {
                                                          color: h.zx.Colors.PRIMARY,
                                                          size: h.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: U,
                                                          children: k.intl.string(k.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, i.jsx)(I.Z, {
                                            justify: I.Z.Justify.CENTER,
                                            className: Z.marginTop8,
                                            children: (0, i.jsx)(h.zx, {
                                                look: h.zx.Looks.LINK,
                                                className: y.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    L.default.track(v.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == A ? void 0 : A.code,
                                                        guild_id: null == A ? void 0 : null === (e = A.guild) || void 0 === e ? void 0 : e.id
                                                    }),
                                                        D.Z.close();
                                                },
                                                color: h.zx.Colors.TRANSPARENT,
                                                children: k.intl.string(k.t.ndsK4e)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: y.inviteSplash,
                            style: { backgroundImage: 'url('.concat(n, ')') }
                        })
                ]
            })
        })
    );
}

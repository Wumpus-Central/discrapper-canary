t.d(n, { default: () => G }), t(411104);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    s = t(990547),
    o = t(399606),
    c = t(481060),
    u = t(588705),
    d = t(700582),
    m = t(100527),
    _ = t(906732),
    p = t(388905),
    x = t(792766),
    g = t(600164),
    N = t(436774),
    h = t(313201),
    v = t(44609),
    E = t(731971),
    I = t(451603),
    f = t(885714),
    j = t(973616),
    S = t(594174),
    C = t(855981),
    A = t(55543),
    T = t(626135),
    P = t(768581),
    L = t(358085),
    b = t(998502),
    R = t(379164),
    Z = t(590965),
    z = t(981631),
    D = t(474936),
    M = t(388032),
    k = t(845926),
    U = t(483938);
function O() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, _.ZP)(m.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            T.default.track(z.rMx.PREMIUM_UPSELL_VIEWED, {
                type: D.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: z.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n
            });
        }, [n]),
        (0, i.jsxs)(c.P3F, {
            onClick: () =>
                (0, f.Z)({
                    analyticsSource: { page: z.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: z.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: z.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: k.experimentUpsellError,
            children: [
                (0, i.jsx)(c.SrA, {
                    size: 'md',
                    className: k.experimentUpsellIcon,
                    color: N.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: k.experimentUpsellText,
                    children: M.intl.string(M.t['4/W4Pz'])
                }),
                (0, i.jsx)('span', {
                    className: k.experimentGetNitro,
                    children: M.intl.string(M.t.b6KOkJ)
                })
            ]
        })
    );
}
function y(e) {
    let { className: n } = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: r()(k.iconContainer, n),
        children: [
            (0, i.jsx)(C.Z, { className: k.iconSparklePlus }),
            (0, i.jsx)(c.xPt, {
                size: 'custom',
                color: 'currentColor',
                className: k.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(A.Z, { className: k.iconSparkleStar })
        ]
    });
}
function F(e) {
    let { transitionState: n } = e,
        t = (0, h.Dt)(),
        { analyticsLocations: l } = (0, _.ZP)(m.Z.INVITE_MODAL);
    return (0, i.jsx)(_.Gt, {
        value: l,
        children: (0, i.jsx)(c.Y0X, {
            'aria-labelledby': t,
            transitionState: n,
            children: (0, i.jsxs)(c.hzk, {
                className: k.errorContent,
                children: [
                    (0, i.jsx)(y, { className: k.errorImage }),
                    (0, i.jsx)(c.X6q, {
                        id: t,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: M.intl.string(M.t.u9zxnZ)
                    }),
                    (0, i.jsx)('div', {
                        className: k.errorBody,
                        children: M.intl.string(M.t.FWkU6O)
                    }),
                    (0, i.jsx)(p.zx, {
                        size: p.zx.Sizes.LARGE,
                        onClick: () => R.Z.close(),
                        color: p.zx.Colors.BRAND,
                        children: M.intl.string(M.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function G(e) {
    let n,
        t,
        a,
        { transitionState: r } = e,
        N = (0, v.WR)({ location: 'AcceptInviteModal' });
    (0, o.e7)([S.default], () => {
        var e;
        return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let f = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: C, error: A, submitting: D } = (0, o.cj)([Z.Z], () => Z.Z.getProps());
    l.useEffect(() => {
        var e;
        (0, E.pB)(null !== (e = null == C ? void 0 : C.approximate_member_count) && void 0 !== e ? e : 0);
    }, [null == C ? void 0 : C.approximate_member_count]);
    let { nickname: y } = (0, E.XW)();
    l.useEffect(() => {
        !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? b.ZP.minimize() : b.ZP.restore(), b.ZP.focus());
    }, []);
    let G = (0, h.Dt)(),
        { analyticsLocations: V } = (0, _.ZP)(m.Z.INVITE_MODAL);
    if (null == C || null == f) return null;
    if (C.state === z.r2o.EXPIRED || C.state === z.r2o.BANNED || C.state === z.r2o.ERROR) return (0, i.jsx)(F, { transitionState: r });
    if (null == C.channel) return null;
    function W() {
        null != C && R.Z.acceptInvite(C);
    }
    let { guild: B, channel: w, inviter: K, target_application: Y } = C,
        H = null != B,
        X = null != C.stage_instance,
        Q = null == C.guild && null == C.channel && null != C.inviter;
    if (null != Y) (n = null == B ? void 0 : B.name), (t = j.ZP.createFromServer(Y).getCoverImageURL(1024));
    else if (null != B)
        (n = B.name),
            (t = P.ZP.getGuildSplashURL({
                id: B.id,
                splash: B.splash
            }));
    else if (((null == (n = w.name) || '' === n) && null != K && (n = K.username), null == n)) throw Error('no name for group DM invite');
    let q = (0, I.yU)();
    return (
        (a = X ? M.intl.string(M.t['5UKyUl']) : N ? M.intl.format(M.t['9sWQNT'], { usernameHook: () => (0, i.jsx)('span', { children: null != y && '' !== y.trim() ? y : f.globalName }) }) : Q ? M.intl.string(M.t['e/6Ogo']) : M.intl.format(M.t.QD7BDA, { guildName: n })),
        (0, i.jsx)(_.Gt, {
            value: V,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                'aria-labelledby': G,
                transitionState: r,
                className: k.container,
                impression: {
                    impressionName: s.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == B ? void 0 : B.id,
                        invite_code: C.code
                    }
                },
                children: [
                    (0, i.jsx)(c.hzk, {
                        className: k.contentWrapper,
                        children: (0, i.jsxs)(g.Z, {
                            className: k.inviteContent,
                            direction: g.Z.Direction.VERTICAL,
                            justify: g.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)('div', {
                                    id: G,
                                    children: (0, i.jsx)(u.Z, {
                                        invite: C,
                                        disableUser: H,
                                        error: A
                                    })
                                }),
                                X && null != B
                                    ? (0, i.jsx)('div', {
                                          className: k.stage,
                                          children: (0, i.jsx)(x.Z, {
                                              isCard: !0,
                                              stageInstance: C.stage_instance,
                                              guild: B
                                          })
                                      })
                                    : null,
                                (0, i.jsxs)('div', {
                                    className: k.ctas,
                                    children: [
                                        q ? (0, i.jsx)(O, {}) : null,
                                        null == Y
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: q ? M.intl.string(M.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: D,
                                                          disabled: q,
                                                          color: X ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: q
                                                              ? M.intl.string(M.t.ZNCziI)
                                                              : (0, i.jsxs)('div', {
                                                                    className: k.acceptAs,
                                                                    children: [
                                                                        N &&
                                                                            (0, i.jsx)(d.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.EFr.SIZE_16,
                                                                                user: f,
                                                                                className: k.acceptAsAvatar
                                                                            }),
                                                                        (0, i.jsx)('span', {
                                                                            className: k.acceptAsName,
                                                                            children: a
                                                                        })
                                                                    ]
                                                                })
                                                      });
                                                  }
                                              })
                                            : (0, i.jsxs)('div', {
                                                  className: k.buttonGroup,
                                                  children: [
                                                      (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: D,
                                                          children: M.intl.string(M.t.RscU7O)
                                                      }),
                                                      (0, i.jsx)(p.zx, {
                                                          color: p.zx.Colors.PRIMARY,
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: D,
                                                          children: M.intl.string(M.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, i.jsx)(g.Z, {
                                            justify: g.Z.Justify.CENTER,
                                            className: U.marginTop8,
                                            children: (0, i.jsx)(p.zx, {
                                                look: p.zx.Looks.LINK,
                                                className: k.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    T.default.track(z.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == C ? void 0 : C.code,
                                                        guild_id: null == C ? void 0 : null === (e = C.guild) || void 0 === e ? void 0 : e.id
                                                    }),
                                                        R.Z.close();
                                                },
                                                color: p.zx.Colors.TRANSPARENT,
                                                children: M.intl.string(M.t.ndsK4e)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    null != t &&
                        (0, i.jsx)('div', {
                            className: k.inviteSplash,
                            style: { backgroundImage: 'url('.concat(t, ')') }
                        })
                ]
            })
        })
    );
}

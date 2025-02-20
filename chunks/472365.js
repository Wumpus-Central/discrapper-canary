t.d(n, { default: () => F }), t(411104), t(566702);
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
    N = t(792766),
    x = t(600164),
    g = t(436774),
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
    W = t(590965),
    Z = t(981631),
    z = t(474936),
    D = t(388032),
    M = t(725472),
    k = t(455812);
function U() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, _.ZP)(m.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            T.default.track(Z.rMx.PREMIUM_UPSELL_VIEWED, {
                type: z.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: Z.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n
            });
        }, [n]),
        (0, i.jsxs)(c.P3F, {
            onClick: () =>
                (0, f.Z)({
                    analyticsSource: { page: Z.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: Z.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: Z.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: M.experimentUpsellError,
            children: [
                (0, i.jsx)(c.SrA, {
                    size: 'md',
                    className: M.experimentUpsellIcon,
                    color: g.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: M.experimentUpsellText,
                    children: D.NW.string(D.t['4/W4Pz'])
                }),
                (0, i.jsx)('span', {
                    className: M.experimentGetNitro,
                    children: D.NW.string(D.t.b6KOkJ)
                })
            ]
        })
    );
}
function O(e) {
    let { className: n } = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: r()(M.iconContainer, n),
        children: [
            (0, i.jsx)(C.Z, { className: M.iconSparklePlus }),
            (0, i.jsx)(c.xPt, {
                size: 'custom',
                color: 'currentColor',
                className: M.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(A.Z, { className: M.iconSparkleStar })
        ]
    });
}
function y(e) {
    let { transitionState: n } = e,
        t = (0, h.Dt)(),
        { analyticsLocations: l } = (0, _.ZP)(m.Z.INVITE_MODAL);
    return (0, i.jsx)(_.Gt, {
        value: l,
        children: (0, i.jsx)(c.Y0X, {
            'aria-labelledby': t,
            transitionState: n,
            children: (0, i.jsxs)(c.hzk, {
                className: M.errorContent,
                children: [
                    (0, i.jsx)(O, { className: M.errorImage }),
                    (0, i.jsx)(c.X6q, {
                        id: t,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: D.NW.string(D.t.u9zxnZ)
                    }),
                    (0, i.jsx)('div', {
                        className: M.errorBody,
                        children: D.NW.string(D.t.FWkU6O)
                    }),
                    (0, i.jsx)(p.zx, {
                        size: p.zx.Sizes.LARGE,
                        onClick: () => R.Z.close(),
                        color: p.zx.Colors.BRAND,
                        children: D.NW.string(D.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function F(e) {
    let n,
        t,
        a,
        { transitionState: r } = e,
        g = (0, v.WR)({ location: 'AcceptInviteModal' });
    (0, o.e7)([S.default], () => {
        var e;
        return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let f = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: C, error: A, submitting: z } = (0, o.cj)([W.Z], () => W.Z.getProps());
    l.useEffect(() => {
        var e;
        (0, E.pB)(null !== (e = null == C ? void 0 : C.approximate_member_count) && void 0 !== e ? e : 0);
    }, [null == C ? void 0 : C.approximate_member_count]);
    let { nickname: O } = (0, E.XW)();
    l.useEffect(() => {
        !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? b.ZP.minimize() : b.ZP.restore(), b.ZP.focus());
    }, []);
    let F = (0, h.Dt)(),
        { analyticsLocations: G } = (0, _.ZP)(m.Z.INVITE_MODAL);
    if (null == C || null == f) return null;
    if (C.state === Z.r2o.EXPIRED || C.state === Z.r2o.BANNED || C.state === Z.r2o.ERROR) return (0, i.jsx)(y, { transitionState: r });
    if (null == C.channel) return null;
    function V() {
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
        (a = X ? D.NW.string(D.t['5UKyUl']) : g ? D.NW.format(D.t['9sWQNT'], { usernameHook: () => (0, i.jsx)('span', { children: null != O && '' !== O.trim() ? O : f.globalName }) }) : Q ? D.NW.string(D.t['e/6Ogo']) : D.NW.format(D.t.QD7BDA, { guildName: n })),
        (0, i.jsx)(_.Gt, {
            value: G,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                'aria-labelledby': F,
                transitionState: r,
                className: M.container,
                impression: {
                    impressionName: s.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == B ? void 0 : B.id,
                        invite_code: C.code
                    }
                },
                children: [
                    (0, i.jsx)(c.hzk, {
                        className: M.contentWrapper,
                        children: (0, i.jsxs)(x.Z, {
                            className: M.inviteContent,
                            direction: x.Z.Direction.VERTICAL,
                            justify: x.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)('div', {
                                    id: F,
                                    children: (0, i.jsx)(u.Z, {
                                        invite: C,
                                        disableUser: H,
                                        error: A
                                    })
                                }),
                                X && null != B
                                    ? (0, i.jsx)('div', {
                                          className: M.stage,
                                          children: (0, i.jsx)(N.Z, {
                                              isCard: !0,
                                              stageInstance: C.stage_instance,
                                              guild: B
                                          })
                                      })
                                    : null,
                                (0, i.jsxs)('div', {
                                    className: M.ctas,
                                    children: [
                                        q ? (0, i.jsx)(U, {}) : null,
                                        null == Y
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: q ? D.NW.string(D.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: V,
                                                          submitting: z,
                                                          disabled: q,
                                                          color: X ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: q
                                                              ? D.NW.string(D.t.ZNCziI)
                                                              : (0, i.jsxs)('div', {
                                                                    className: M.acceptAs,
                                                                    children: [
                                                                        g &&
                                                                            (0, i.jsx)(d.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.EFr.SIZE_16,
                                                                                user: f,
                                                                                className: M.acceptAsAvatar
                                                                            }),
                                                                        (0, i.jsx)('span', {
                                                                            className: M.acceptAsName,
                                                                            children: a
                                                                        })
                                                                    ]
                                                                })
                                                      });
                                                  }
                                              })
                                            : (0, i.jsxs)('div', {
                                                  className: M.buttonGroup,
                                                  children: [
                                                      (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: V,
                                                          submitting: z,
                                                          children: D.NW.string(D.t.RscU7O)
                                                      }),
                                                      (0, i.jsx)(p.zx, {
                                                          color: p.zx.Colors.PRIMARY,
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: V,
                                                          submitting: z,
                                                          children: D.NW.string(D.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, i.jsx)(x.Z, {
                                            justify: x.Z.Justify.CENTER,
                                            className: k.marginTop8,
                                            children: (0, i.jsx)(p.zx, {
                                                look: p.zx.Looks.LINK,
                                                className: M.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    T.default.track(Z.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == C ? void 0 : C.code,
                                                        guild_id: null == C ? void 0 : null === (e = C.guild) || void 0 === e ? void 0 : e.id
                                                    }),
                                                        R.Z.close();
                                                },
                                                color: p.zx.Colors.TRANSPARENT,
                                                children: D.NW.string(D.t.ndsK4e)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    null != t &&
                        (0, i.jsx)('div', {
                            className: M.inviteSplash,
                            style: { backgroundImage: 'url('.concat(t, ')') }
                        })
                ]
            })
        })
    );
}

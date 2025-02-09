t.d(n, { default: () => y }), t(411104);
var i = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    o = t(990547),
    s = t(399606),
    c = t(481060),
    d = t(588705),
    _ = t(700582),
    u = t(100527),
    m = t(906732),
    g = t(388905),
    p = t(792766),
    E = t(600164),
    b = t(436774),
    f = t(313201),
    x = t(44609),
    N = t(731971),
    h = t(451603),
    I = t(885714),
    C = t(973616),
    S = t(594174),
    T = t(855981),
    R = t(55543),
    v = t(626135),
    A = t(768581),
    j = t(358085),
    L = t(998502),
    k = t(379164),
    D = t(590965),
    B = t(981631),
    P = t(474936),
    O = t(388032),
    U = t(796853),
    M = t(814632);
function Z() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, m.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        a.useEffect(() => {
            v.default.track(B.rMx.PREMIUM_UPSELL_VIEWED, {
                type: P.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: B.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n
            });
        }, [n]),
        (0, i.jsxs)(c.P3F, {
            onClick: () =>
                (0, I.Z)({
                    analyticsSource: { page: B.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: B.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: B.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: U.experimentUpsellError,
            children: [
                (0, i.jsx)(c.SrA, {
                    size: 'md',
                    className: U.experimentUpsellIcon,
                    color: b.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: U.experimentUpsellText,
                    children: O.intl.string(O.t['4/W4Pz'])
                }),
                (0, i.jsx)('span', {
                    className: U.experimentGetNitro,
                    children: O.intl.string(O.t.b6KOkJ)
                })
            ]
        })
    );
}
function z(e) {
    let { className: n } = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: r()(U.iconContainer, n),
        children: [
            (0, i.jsx)(T.Z, { className: U.iconSparklePlus }),
            (0, i.jsx)(c.xPt, {
                size: 'custom',
                color: 'currentColor',
                className: U.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(R.Z, { className: U.iconSparkleStar })
        ]
    });
}
function F(e) {
    let { transitionState: n } = e,
        t = (0, f.Dt)(),
        { analyticsLocations: a } = (0, m.ZP)(u.Z.INVITE_MODAL);
    return (0, i.jsx)(m.Gt, {
        value: a,
        children: (0, i.jsx)(c.Y0X, {
            'aria-labelledby': t,
            transitionState: n,
            children: (0, i.jsxs)(c.hzk, {
                className: U.errorContent,
                children: [
                    (0, i.jsx)(z, { className: U.errorImage }),
                    (0, i.jsx)(c.X6q, {
                        id: t,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: O.intl.string(O.t.u9zxnZ)
                    }),
                    (0, i.jsx)('div', {
                        className: U.errorBody,
                        children: O.intl.string(O.t.FWkU6O)
                    }),
                    (0, i.jsx)(g.zx, {
                        size: g.zx.Sizes.LARGE,
                        onClick: () => k.Z.close(),
                        color: g.zx.Colors.BRAND,
                        children: O.intl.string(O.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function y(e) {
    let n,
        t,
        l,
        { transitionState: r } = e,
        b = (0, x.WR)({ location: 'AcceptInviteModal' });
    (0, s.e7)([S.default], () => {
        var e;
        return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let I = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: T, error: R, submitting: P } = (0, s.cj)([D.Z], () => D.Z.getProps());
    a.useEffect(() => {
        var e;
        (0, N.pB)(null !== (e = null == T ? void 0 : T.approximate_member_count) && void 0 !== e ? e : 0);
    }, [null == T ? void 0 : T.approximate_member_count]);
    let { nickname: z } = (0, N.XW)();
    a.useEffect(() => {
        !__OVERLAY__ && j.isPlatformEmbedded && ((0, j.isWindows)() ? L.ZP.minimize() : L.ZP.restore(), L.ZP.focus());
    }, []);
    let y = (0, f.Dt)(),
        { analyticsLocations: W } = (0, m.ZP)(u.Z.INVITE_MODAL);
    if (null == T || null == I) return null;
    if (T.state === B.r2o.EXPIRED || T.state === B.r2o.BANNED || T.state === B.r2o.ERROR) return (0, i.jsx)(F, { transitionState: r });
    if (null == T.channel) return null;
    function G() {
        null != T && k.Z.acceptInvite(T);
    }
    let { guild: w, channel: H, inviter: V, target_application: Y } = T,
        K = null != w,
        Q = null != T.stage_instance,
        X = null == T.guild && null == T.channel && null != T.inviter;
    if (null != Y) (n = null == w ? void 0 : w.name), (t = C.ZP.createFromServer(Y).getCoverImageURL(1024));
    else if (null != w)
        (n = w.name),
            (t = A.ZP.getGuildSplashURL({
                id: w.id,
                splash: w.splash
            }));
    else if (((null == (n = H.name) || '' === n) && null != V && (n = V.username), null == n)) throw Error('no name for group DM invite');
    let q = (0, h.yU)();
    return (
        (l = Q ? O.intl.string(O.t['5UKyUl']) : b ? O.intl.format(O.t['9sWQNT'], { usernameHook: () => (0, i.jsx)('span', { children: null != z && '' !== z.trim() ? z : I.globalName }) }) : X ? O.intl.string(O.t['e/6Ogo']) : O.intl.format(O.t.QD7BDA, { guildName: n })),
        (0, i.jsx)(m.Gt, {
            value: W,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                'aria-labelledby': y,
                transitionState: r,
                className: U.container,
                impression: {
                    impressionName: o.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == w ? void 0 : w.id,
                        invite_code: T.code
                    }
                },
                children: [
                    (0, i.jsx)(c.hzk, {
                        className: U.contentWrapper,
                        children: (0, i.jsxs)(E.Z, {
                            className: U.inviteContent,
                            direction: E.Z.Direction.VERTICAL,
                            justify: E.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)('div', {
                                    id: y,
                                    children: (0, i.jsx)(d.Z, {
                                        invite: T,
                                        disableUser: K,
                                        error: R
                                    })
                                }),
                                Q && null != w
                                    ? (0, i.jsx)('div', {
                                          className: U.stage,
                                          children: (0, i.jsx)(p.Z, {
                                              isCard: !0,
                                              stageInstance: T.stage_instance,
                                              guild: w
                                          })
                                      })
                                    : null,
                                (0, i.jsxs)('div', {
                                    className: U.ctas,
                                    children: [
                                        q ? (0, i.jsx)(Z, {}) : null,
                                        null == Y
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: q ? O.intl.string(O.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, i.jsx)(g.zx, {
                                                          size: g.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: P,
                                                          disabled: q,
                                                          color: Q ? g.zx.Colors.GREEN : g.zx.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: q
                                                              ? O.intl.string(O.t.ZNCziI)
                                                              : (0, i.jsxs)('div', {
                                                                    className: U.acceptAs,
                                                                    children: [
                                                                        b &&
                                                                            (0, i.jsx)(_.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.EFr.SIZE_16,
                                                                                user: I,
                                                                                className: U.acceptAsAvatar
                                                                            }),
                                                                        (0, i.jsx)('span', {
                                                                            className: U.acceptAsName,
                                                                            children: l
                                                                        })
                                                                    ]
                                                                })
                                                      });
                                                  }
                                              })
                                            : (0, i.jsxs)('div', {
                                                  className: U.buttonGroup,
                                                  children: [
                                                      (0, i.jsx)(g.zx, {
                                                          size: g.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: P,
                                                          children: O.intl.string(O.t.RscU7O)
                                                      }),
                                                      (0, i.jsx)(g.zx, {
                                                          color: g.zx.Colors.PRIMARY,
                                                          size: g.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: P,
                                                          children: O.intl.string(O.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, i.jsx)(E.Z, {
                                            justify: E.Z.Justify.CENTER,
                                            className: M.marginTop8,
                                            children: (0, i.jsx)(g.zx, {
                                                look: g.zx.Looks.LINK,
                                                className: U.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    v.default.track(B.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == T ? void 0 : T.code,
                                                        guild_id: null == T ? void 0 : null === (e = T.guild) || void 0 === e ? void 0 : e.id
                                                    }),
                                                        k.Z.close();
                                                },
                                                color: g.zx.Colors.TRANSPARENT,
                                                children: O.intl.string(O.t.ndsK4e)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    null != t &&
                        (0, i.jsx)('div', {
                            className: U.inviteSplash,
                            style: { backgroundImage: 'url('.concat(t, ')') }
                        })
                ]
            })
        })
    );
}

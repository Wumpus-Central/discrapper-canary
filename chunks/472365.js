t.d(n, { default: () => G }), t(415506), t(781311);
var i = t(255367),
    l = t(73800),
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
    E = t(44609),
    I = t(731971),
    f = t(451603),
    v = t(885714),
    j = t(973616),
    S = t(594174),
    C = t(855981),
    A = t(55543),
    T = t(626135),
    L = t(768581),
    P = t(358085),
    b = t(998502),
    R = t(379164),
    Z = t(590965),
    z = t(981631),
    D = t(474936),
    M = t(388032),
    k = t(911042),
    O = t(20493);
function U() {
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
                (0, v.Z)({
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
    var n;
    let t,
        a,
        r,
        { transitionState: N } = e,
        v = (0, E.WR)({ location: 'AcceptInviteModal' });
    (0, o.e7)([S.default], () => {
        var e;
        return null == (e = S.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let C = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: A, error: D, submitting: y } = (0, o.cj)([Z.Z], () => Z.Z.getProps());
    l.useEffect(() => {
        if (null != A && null != A.guild) {
            var e;
            (0, I.pB)(null != (e = A.approximate_member_count) ? e : 0, A.code, A.guild.id);
        }
    }, [A, null == A ? void 0 : A.approximate_member_count, null == A ? void 0 : A.code, null == A || null == (n = A.guild) ? void 0 : n.id]);
    let { nickname: G } = (0, I.XW)();
    l.useEffect(() => {
        !__OVERLAY__ && P.isPlatformEmbedded && ((0, P.isWindows)() ? b.ZP.minimize() : b.ZP.restore(), b.ZP.focus());
    }, []);
    let V = (0, h.Dt)(),
        { analyticsLocations: W } = (0, _.ZP)(m.Z.INVITE_MODAL);
    if (null == A || null == C) return null;
    if (A.state === z.r2o.EXPIRED || A.state === z.r2o.BANNED || A.state === z.r2o.ERROR) return (0, i.jsx)(F, { transitionState: N });
    if (null == A.channel) return null;
    function B() {
        null != A && R.Z.acceptInvite(A);
    }
    let { guild: w, channel: K, inviter: Y, target_application: H } = A,
        X = null != w,
        Q = null != A.stage_instance,
        q = null == A.guild && null == A.channel && null != A.inviter;
    if (null != H) (t = null == w ? void 0 : w.name), (a = j.ZP.createFromServer(H).getCoverImageURL(1024));
    else if (null != w)
        (t = w.name),
            (a = L.ZP.getGuildSplashURL({
                id: w.id,
                splash: w.splash
            }));
    else if (((null == (t = K.name) || '' === t) && null != Y && (t = Y.username), null == t)) throw Error('no name for group DM invite');
    let J = (0, f.yU)();
    return (
        (r = Q ? M.intl.string(M.t['5UKyUl']) : v ? M.intl.format(M.t['9sWQNT'], { usernameHook: () => (0, i.jsx)('span', { children: null != G && '' !== G.trim() ? G : C.globalName }) }) : q ? M.intl.string(M.t['e/6Ogo']) : M.intl.format(M.t.QD7BDA, { guildName: t })),
        (0, i.jsx)(_.Gt, {
            value: W,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                'aria-labelledby': V,
                transitionState: N,
                className: k.container,
                impression: {
                    impressionName: s.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == w ? void 0 : w.id,
                        invite_code: A.code
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
                                    id: V,
                                    children: (0, i.jsx)(u.Z, {
                                        invite: A,
                                        disableUser: X,
                                        error: D
                                    })
                                }),
                                Q && null != w
                                    ? (0, i.jsx)('div', {
                                          className: k.stage,
                                          children: (0, i.jsx)(x.Z, {
                                              isCard: !0,
                                              stageInstance: A.stage_instance,
                                              guild: w
                                          })
                                      })
                                    : null,
                                (0, i.jsxs)('div', {
                                    className: k.ctas,
                                    children: [
                                        J ? (0, i.jsx)(U, {}) : null,
                                        null == H
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: J ? M.intl.string(M.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: y,
                                                          disabled: J,
                                                          color: Q ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: J
                                                              ? M.intl.string(M.t.ZNCziI)
                                                              : (0, i.jsxs)('div', {
                                                                    className: k.acceptAs,
                                                                    children: [
                                                                        v &&
                                                                            (0, i.jsx)(d.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.EFr.SIZE_16,
                                                                                user: C,
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
                                                      (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: y,
                                                          children: M.intl.string(M.t.RscU7O)
                                                      }),
                                                      (0, i.jsx)(p.zx, {
                                                          color: p.zx.Colors.PRIMARY,
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: y,
                                                          children: M.intl.string(M.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, i.jsx)(g.Z, {
                                            justify: g.Z.Justify.CENTER,
                                            className: O.marginTop8,
                                            children: (0, i.jsx)(p.zx, {
                                                look: p.zx.Looks.LINK,
                                                className: k.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    T.default.track(z.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == A ? void 0 : A.code,
                                                        guild_id: null == A || null == (e = A.guild) ? void 0 : e.id
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
                    null != a &&
                        (0, i.jsx)('div', {
                            className: k.inviteSplash,
                            style: { backgroundImage: 'url('.concat(a, ')') }
                        })
                ]
            })
        })
    );
}

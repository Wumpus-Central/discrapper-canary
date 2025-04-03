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
    W = t(590965),
    Z = t(981631),
    z = t(474936),
    D = t(388032),
    M = t(911042),
    k = t(20493);
function O() {
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
                (0, v.Z)({
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
function U(e) {
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
                    (0, i.jsx)(U, { className: M.errorImage }),
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
    var n;
    let t,
        a,
        r,
        { transitionState: g } = e,
        v = (0, E.WR)({ location: 'AcceptInviteModal' });
    (0, o.e7)([S.default], () => {
        var e;
        return null == (e = S.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let C = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: A, error: z, submitting: U } = (0, o.cj)([W.Z], () => W.Z.getProps());
    l.useEffect(() => {
        if (null != A && null != A.guild) {
            var e;
            (0, I.pB)(null != (e = A.approximate_member_count) ? e : 0, A.code, A.guild.id);
        }
    }, [A, null == A ? void 0 : A.approximate_member_count, null == A ? void 0 : A.code, null == A || null == (n = A.guild) ? void 0 : n.id]);
    let { nickname: F } = (0, I.XW)();
    l.useEffect(() => {
        !__OVERLAY__ && P.isPlatformEmbedded && ((0, P.isWindows)() ? b.ZP.minimize() : b.ZP.restore(), b.ZP.focus());
    }, []);
    let G = (0, h.Dt)(),
        { analyticsLocations: V } = (0, _.ZP)(m.Z.INVITE_MODAL);
    if (null == A || null == C) return null;
    if (A.state === Z.r2o.EXPIRED || A.state === Z.r2o.BANNED || A.state === Z.r2o.ERROR) return (0, i.jsx)(y, { transitionState: g });
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
        (r = Q ? D.NW.string(D.t['5UKyUl']) : v ? D.NW.format(D.t['9sWQNT'], { usernameHook: () => (0, i.jsx)('span', { children: null != F && '' !== F.trim() ? F : C.globalName }) }) : q ? D.NW.string(D.t['e/6Ogo']) : D.NW.format(D.t.QD7BDA, { guildName: t })),
        (0, i.jsx)(_.Gt, {
            value: V,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                'aria-labelledby': G,
                transitionState: g,
                className: M.container,
                impression: {
                    impressionName: s.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == w ? void 0 : w.id,
                        invite_code: A.code
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
                                    id: G,
                                    children: (0, i.jsx)(u.Z, {
                                        invite: A,
                                        disableUser: X,
                                        error: z
                                    })
                                }),
                                Q && null != w
                                    ? (0, i.jsx)('div', {
                                          className: M.stage,
                                          children: (0, i.jsx)(N.Z, {
                                              isCard: !0,
                                              stageInstance: A.stage_instance,
                                              guild: w
                                          })
                                      })
                                    : null,
                                (0, i.jsxs)('div', {
                                    className: M.ctas,
                                    children: [
                                        J ? (0, i.jsx)(O, {}) : null,
                                        null == H
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: J ? D.NW.string(D.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: U,
                                                          disabled: J,
                                                          color: Q ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: J
                                                              ? D.NW.string(D.t.ZNCziI)
                                                              : (0, i.jsxs)('div', {
                                                                    className: M.acceptAs,
                                                                    children: [
                                                                        v &&
                                                                            (0, i.jsx)(d.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: c.EFr.SIZE_16,
                                                                                user: C,
                                                                                className: M.acceptAsAvatar
                                                                            }),
                                                                        (0, i.jsx)('span', {
                                                                            className: M.acceptAsName,
                                                                            children: r
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
                                                          onClick: B,
                                                          submitting: U,
                                                          children: D.NW.string(D.t.RscU7O)
                                                      }),
                                                      (0, i.jsx)(p.zx, {
                                                          color: p.zx.Colors.PRIMARY,
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: B,
                                                          submitting: U,
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
                                                        invite_code: null == A ? void 0 : A.code,
                                                        guild_id: null == A || null == (e = A.guild) ? void 0 : e.id
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
                    null != a &&
                        (0, i.jsx)('div', {
                            className: M.inviteSplash,
                            style: { backgroundImage: 'url('.concat(a, ')') }
                        })
                ]
            })
        })
    );
}

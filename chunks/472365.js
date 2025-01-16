s.d(t, {
    Z: function () {
        return H;
    }
}),
    s(411104);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    o = s.n(r),
    a = s(399606),
    l = s(481060),
    c = s(588705),
    d = s(700582),
    u = s(100527),
    h = s(906732),
    E = s(388905),
    p = s(792766),
    m = s(600164),
    _ = s(436774),
    C = s(313201),
    g = s(44609),
    N = s(731971),
    f = s(451603),
    b = s(885714),
    R = s(973616),
    I = s(594174),
    S = s(855981),
    T = s(55543),
    O = s(626135),
    x = s(768581),
    y = s(358085),
    M = s(998502),
    A = s(379164),
    L = s(590965),
    P = s(981631),
    v = s(474936),
    D = s(388032),
    U = s(939661),
    Z = s(232186);
function w() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, h.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            O.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: P.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, n.jsxs)(l.Clickable, {
            onClick: () =>
                (0, b.Z)({
                    analyticsSource: { page: P.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: P.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: P.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: U.experimentUpsellError,
            children: [
                (0, n.jsx)(l.NitroWheelIcon, {
                    size: 'md',
                    className: U.experimentUpsellIcon,
                    color: _.JX.PREMIUM_TIER_2
                }),
                (0, n.jsx)('span', {
                    className: U.experimentUpsellText,
                    children: D.intl.string(D.t['4/W4Pz'])
                }),
                (0, n.jsx)('span', {
                    className: U.experimentGetNitro,
                    children: D.intl.string(D.t.b6KOkJ)
                })
            ]
        })
    );
}
function k(e) {
    let { className: t } = e;
    return (0, n.jsxs)('div', {
        'aria-hidden': 'true',
        className: o()(U.iconContainer, t),
        children: [
            (0, n.jsx)(S.Z, { className: U.iconSparklePlus }),
            (0, n.jsx)(l.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                className: U.iconLink,
                width: 40,
                height: 40
            }),
            (0, n.jsx)(T.Z, { className: U.iconSparkleStar })
        ]
    });
}
function j(e) {
    let { transitionState: t } = e,
        s = (0, C.Dt)(),
        { analyticsLocations: i } = (0, h.ZP)(u.Z.INVITE_MODAL);
    return (0, n.jsx)(h.Gt, {
        value: i,
        children: (0, n.jsx)(l.ModalRoot, {
            'aria-labelledby': s,
            transitionState: t,
            children: (0, n.jsxs)(l.ModalContent, {
                className: U.errorContent,
                children: [
                    (0, n.jsx)(k, { className: U.errorImage }),
                    (0, n.jsx)(l.Heading, {
                        id: s,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: D.intl.string(D.t.u9zxnZ)
                    }),
                    (0, n.jsx)('div', {
                        className: U.errorBody,
                        children: D.intl.string(D.t.FWkU6O)
                    }),
                    (0, n.jsx)(E.zx, {
                        size: E.zx.Sizes.LARGE,
                        onClick: () => A.Z.close(),
                        color: E.zx.Colors.BRAND,
                        children: D.intl.string(D.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function H(e) {
    let t,
        s,
        r,
        { transitionState: o } = e,
        _ = (0, g.WR)({ location: 'AcceptInviteModal' });
    (0, a.e7)([I.default], () => {
        var e;
        return null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let b = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
        { invite: S, error: T, submitting: O } = (0, a.cj)([L.Z], () => L.Z.getProps()),
        { nickname: v } = (0, N.XW)();
    i.useEffect(() => {
        !__OVERLAY__ && y.isPlatformEmbedded && ((0, y.isWindows)() ? M.ZP.minimize() : M.ZP.restore(), M.ZP.focus());
    }, []);
    let k = (0, C.Dt)(),
        { analyticsLocations: H } = (0, h.ZP)(u.Z.INVITE_MODAL);
    if (null == S || null == b) return null;
    if (S.state === P.r2o.EXPIRED || S.state === P.r2o.BANNED || S.state === P.r2o.ERROR) return (0, n.jsx)(j, { transitionState: o });
    if (null == S.channel) return null;
    function G() {
        null != S && A.Z.acceptInvite(S);
    }
    let { guild: V, channel: K, inviter: W, target_application: Y } = S,
        F = null != V,
        z = null != S.stage_instance,
        X = null == S.guild && null == S.channel && null != S.inviter;
    if (null != Y) (t = null == V ? void 0 : V.name), (s = R.ZP.createFromServer(Y).getCoverImageURL(1024));
    else if (null != V)
        (t = V.name),
            (s = x.ZP.getGuildSplashURL({
                id: V.id,
                splash: V.splash
            }));
    else if (((null == (t = K.name) || '' === t) && null != W && (t = W.username), null == t)) throw Error('no name for group DM invite');
    let Q = (0, f.yU)();
    return (
        (r = z ? D.intl.string(D.t['5UKyUl']) : _ ? D.intl.format(D.t['9sWQNT'], { usernameHook: () => (0, n.jsx)('span', { children: null != v && '' !== v.trim() ? v : b.globalName }) }) : X ? D.intl.string(D.t['e/6Ogo']) : D.intl.format(D.t.QD7BDA, { guildName: t })),
        (0, n.jsx)(h.Gt, {
            value: H,
            children: (0, n.jsxs)(l.ModalRoot, {
                size: l.ModalSize.DYNAMIC,
                'aria-labelledby': k,
                transitionState: o,
                className: U.container,
                children: [
                    (0, n.jsx)(l.ModalContent, {
                        className: U.contentWrapper,
                        children: (0, n.jsxs)(m.Z, {
                            className: U.inviteContent,
                            direction: m.Z.Direction.VERTICAL,
                            justify: m.Z.Justify.BETWEEN,
                            children: [
                                (0, n.jsx)('div', {
                                    id: k,
                                    children: (0, n.jsx)(c.Z, {
                                        invite: S,
                                        disableUser: F,
                                        error: T
                                    })
                                }),
                                z && null != V
                                    ? (0, n.jsx)('div', {
                                          className: U.stage,
                                          children: (0, n.jsx)(p.Z, {
                                              isCard: !0,
                                              stageInstance: S.stage_instance,
                                              guild: V
                                          })
                                      })
                                    : null,
                                (0, n.jsxs)('div', {
                                    className: U.ctas,
                                    children: [
                                        Q ? (0, n.jsx)(w, {}) : null,
                                        null == Y
                                            ? (0, n.jsx)(l.Tooltip, {
                                                  text: Q ? D.intl.string(D.t.iLyuDA) : null,
                                                  position: 'bottom',
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: s } = e;
                                                      return (0, n.jsx)(E.zx, {
                                                          size: E.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: O,
                                                          disabled: Q,
                                                          color: z ? E.zx.Colors.GREEN : E.zx.Colors.BRAND,
                                                          onMouseEnter: t,
                                                          onMouseLeave: s,
                                                          children: Q
                                                              ? D.intl.string(D.t.ZNCziI)
                                                              : (0, n.jsxs)('div', {
                                                                    className: U.acceptAs,
                                                                    children: [
                                                                        _ &&
                                                                            (0, n.jsx)(d.Z, {
                                                                                'aria-hidden': !0,
                                                                                size: l.AvatarSizes.SIZE_16,
                                                                                user: b
                                                                            }),
                                                                        r
                                                                    ]
                                                                })
                                                      });
                                                  }
                                              })
                                            : (0, n.jsxs)('div', {
                                                  className: U.buttonGroup,
                                                  children: [
                                                      (0, n.jsx)(E.zx, {
                                                          size: E.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: O,
                                                          children: D.intl.string(D.t.RscU7O)
                                                      }),
                                                      (0, n.jsx)(E.zx, {
                                                          color: E.zx.Colors.PRIMARY,
                                                          size: E.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: O,
                                                          children: D.intl.string(D.t.eylRaW)
                                                      })
                                                  ]
                                              }),
                                        (0, n.jsx)(m.Z, {
                                            justify: m.Z.Justify.CENTER,
                                            className: Z.marginTop8,
                                            children: (0, n.jsx)(E.zx, {
                                                look: E.zx.Looks.LINK,
                                                className: U.noThanksButton,
                                                onClick: function () {
                                                    A.Z.close();
                                                },
                                                color: E.zx.Colors.TRANSPARENT,
                                                children: D.intl.string(D.t.ndsK4e)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    null != s &&
                        (0, n.jsx)('div', {
                            className: U.inviteSplash,
                            style: { backgroundImage: 'url('.concat(s, ')') }
                        })
                ]
            })
        })
    );
}

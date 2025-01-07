n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(411104);
var s = n(200651),
    i = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(399606),
    a = n(481060),
    c = n(588705),
    u = n(100527),
    d = n(906732),
    h = n(388905),
    E = n(792766),
    p = n(600164),
    _ = n(436774),
    m = n(313201),
    C = n(451603),
    N = n(885714),
    g = n(973616),
    f = n(594174),
    R = n(855981),
    b = n(55543),
    I = n(626135),
    T = n(768581),
    S = n(358085),
    O = n(998502),
    x = n(379164),
    A = n(590965),
    y = n(981631),
    M = n(474936),
    P = n(388032),
    L = n(939661),
    v = n(232186);
function D() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            I.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                type: M.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: y.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, s.jsxs)(a.Clickable, {
            onClick: () =>
                (0, N.Z)({
                    analyticsSource: { page: y.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: y.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: y.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: L.experimentUpsellError,
            children: [
                (0, s.jsx)(a.NitroWheelIcon, {
                    size: 'md',
                    className: L.experimentUpsellIcon,
                    color: _.JX.PREMIUM_TIER_2
                }),
                (0, s.jsx)('span', {
                    className: L.experimentUpsellText,
                    children: P.intl.string(P.t['4/W4Pz'])
                }),
                (0, s.jsx)('span', {
                    className: L.experimentGetNitro,
                    children: P.intl.string(P.t.b6KOkJ)
                })
            ]
        })
    );
}
function Z(e) {
    let { className: t } = e;
    return (0, s.jsxs)('div', {
        'aria-hidden': 'true',
        className: o()(L.iconContainer, t),
        children: [
            (0, s.jsx)(R.Z, { className: L.iconSparklePlus }),
            (0, s.jsx)(a.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                className: L.iconLink,
                width: 40,
                height: 40
            }),
            (0, s.jsx)(b.Z, { className: L.iconSparkleStar })
        ]
    });
}
function U(e) {
    let { transitionState: t } = e,
        n = (0, m.Dt)(),
        { analyticsLocations: i } = (0, d.ZP)(u.Z.INVITE_MODAL);
    return (0, s.jsx)(d.Gt, {
        value: i,
        children: (0, s.jsx)(a.ModalRoot, {
            size: a.ModalSize.DYNAMIC,
            'aria-labelledby': n,
            transitionState: t,
            children: (0, s.jsxs)(a.ModalContent, {
                className: L.errorContent,
                children: [
                    (0, s.jsx)(Z, { className: L.errorImage }),
                    (0, s.jsx)(a.Heading, {
                        id: n,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: P.intl.string(P.t.u9zxnZ)
                    }),
                    (0, s.jsx)('div', {
                        className: L.errorBody,
                        children: P.intl.string(P.t.FWkU6O)
                    }),
                    (0, s.jsx)(h.zx, {
                        size: h.zx.Sizes.LARGE,
                        onClick: () => x.Z.close(),
                        color: h.zx.Colors.BRAND,
                        children: P.intl.string(P.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function w(e) {
    let t,
        n,
        { transitionState: r } = e;
    (0, l.e7)([f.default], () => {
        var e;
        return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let { invite: _, error: N, submitting: R } = (0, l.cj)([A.Z], () => A.Z.getProps());
    i.useEffect(() => {
        !__OVERLAY__ && S.isPlatformEmbedded && ((0, S.isWindows)() ? O.ZP.minimize() : O.ZP.restore(), O.ZP.focus());
    }, []);
    let b = (0, m.Dt)(),
        { analyticsLocations: I } = (0, d.ZP)(u.Z.INVITE_MODAL);
    if (null == _) return null;
    if (_.state === y.r2o.EXPIRED || _.state === y.r2o.BANNED || _.state === y.r2o.ERROR) return (0, s.jsx)(U, { transitionState: r });
    if (null == _.channel) return null;
    function M() {
        null != _ && x.Z.acceptInvite(_);
    }
    let { guild: Z, channel: w, inviter: k, target_application: j } = _,
        H = null != Z,
        V = null != _.stage_instance,
        G = null == _.guild && null == _.channel && null != _.inviter;
    if (null != j) (t = null == Z ? void 0 : Z.name), (n = g.ZP.createFromServer(j).getCoverImageURL(1024));
    else if (null != Z)
        (t = Z.name),
            (n = T.ZP.getGuildSplashURL({
                id: Z.id,
                splash: Z.splash
            }));
    else if (((null == (t = w.name) || '' === t) && null != k && (t = k.username), null == t)) throw Error('no name for group DM invite');
    let K = (0, C.yU)(),
        W = V ? P.intl.string(P.t['5UKyUl']) : P.intl.format(P.t.QD7BDA, { guildName: t });
    return (
        G && (W = P.intl.string(P.t['e/6Ogo'])),
        (0, s.jsx)(d.Gt, {
            value: I,
            children: (0, s.jsxs)(a.ModalRoot, {
                size: a.ModalSize.DYNAMIC,
                'aria-labelledby': b,
                transitionState: r,
                className: L.container,
                children: [
                    (0, s.jsx)('div', {
                        className: L.contentWrapper,
                        children: (0, s.jsx)(a.Scroller, {
                            className: L.scroller,
                            children: (0, s.jsxs)(p.Z, {
                                className: L.inviteContent,
                                direction: p.Z.Direction.VERTICAL,
                                justify: p.Z.Justify.BETWEEN,
                                children: [
                                    (0, s.jsx)('div', {
                                        id: b,
                                        className: v.marginBottom20,
                                        children: (0, s.jsx)(c.Z, {
                                            invite: _,
                                            disableUser: H,
                                            error: N
                                        })
                                    }),
                                    V && null != Z
                                        ? (0, s.jsx)('div', {
                                              className: o()(v.marginBottom20, L.stage),
                                              children: (0, s.jsx)(E.Z, {
                                                  isCard: !0,
                                                  stageInstance: _.stage_instance,
                                                  guild: Z
                                              })
                                          })
                                        : null,
                                    (0, s.jsxs)('div', {
                                        children: [
                                            K ? (0, s.jsx)(D, {}) : null,
                                            null == j
                                                ? (0, s.jsx)(a.Tooltip, {
                                                      text: K ? P.intl.string(P.t.iLyuDA) : null,
                                                      position: 'bottom',
                                                      children: (e) => {
                                                          let { onMouseEnter: t, onMouseLeave: n } = e;
                                                          return (0, s.jsx)(h.zx, {
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: M,
                                                              submitting: R,
                                                              disabled: K,
                                                              color: V ? h.zx.Colors.GREEN : h.zx.Colors.BRAND,
                                                              onMouseEnter: t,
                                                              onMouseLeave: n,
                                                              children: K ? P.intl.string(P.t.ZNCziI) : W
                                                          });
                                                      }
                                                  })
                                                : (0, s.jsxs)('div', {
                                                      className: L.buttonGroup,
                                                      children: [
                                                          (0, s.jsx)(h.zx, {
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: M,
                                                              submitting: R,
                                                              children: P.intl.string(P.t.RscU7O)
                                                          }),
                                                          (0, s.jsx)(h.zx, {
                                                              color: h.zx.Colors.PRIMARY,
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: M,
                                                              submitting: R,
                                                              children: P.intl.string(P.t.eylRaW)
                                                          })
                                                      ]
                                                  }),
                                            (0, s.jsx)(p.Z, {
                                                justify: p.Z.Justify.CENTER,
                                                className: v.marginTop8,
                                                children: (0, s.jsx)(h.zx, {
                                                    look: h.zx.Looks.LINK,
                                                    className: L.noThanksButton,
                                                    onClick: function () {
                                                        x.Z.close();
                                                    },
                                                    color: h.zx.Colors.TRANSPARENT,
                                                    children: P.intl.string(P.t.ndsK4e)
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    null != n &&
                        (0, s.jsx)('div', {
                            className: L.inviteSplash,
                            style: { backgroundImage: 'url('.concat(n, ')') }
                        })
                ]
            })
        })
    );
}

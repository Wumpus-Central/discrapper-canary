var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(704215),
    u = r(996146),
    c = r(481060),
    d = r(100527),
    f = r(906732),
    p = r(644916),
    h = r(243778),
    _ = r(963249),
    m = r(286961),
    g = r(802408),
    E = r(819640),
    v = r(594174),
    y = r(70956),
    b = r(709054),
    I = r(51144),
    T = r(443603),
    S = r(981631),
    A = r(921944),
    C = r(388032),
    N = r(17823),
    R = r(553796);
function O(e) {
    return (0, a.jsx)(T.Z, {
        innerClassName: R.button,
        'aria-label': C.intl.string(C.t.Z1RnTk),
        isActive: !1,
        onClick: e.onClick,
        children: (0, a.jsx)('div', {
            className: N.iconContainer,
            children: e.hovered
                ? (0, a.jsx)(c.LottieAnimation, {
                      className: N.giftBoxIcon,
                      importData: e.config.getAnimationData
                  })
                : (0, a.jsx)(c.GiftIcon, {})
        })
    });
}
function D(e) {
    let { Component: n, events: r, play: i } = (0, u.$)(),
        o = () => {
            var n;
            i(), null === (n = e.onClick) || void 0 === n || n.call(e);
        };
    return (0, a.jsx)(T.Z, {
        innerClassName: R.button,
        'aria-label': C.intl.string(C.t.Z1RnTk),
        isActive: !1,
        onClick: o,
        ...r,
        children: (0, a.jsxs)('div', {
            className: N.iconContainer,
            children: [
                (0, a.jsx)(n, {
                    className: N.trinketsIcon,
                    color: 'currentColor'
                }),
                e.hovered &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(c.LottieAnimation, {
                                className: N.trinketsDecoration,
                                importData: e.config.getAnimationData
                            }),
                            (0, a.jsx)('div', { className: N.trinketsGlowMask }),
                            (0, a.jsx)(c.LottieAnimation, {
                                className: N.trinketsGlow,
                                importData: e.config.getGlowAnimationData
                            })
                        ]
                    })
            ]
        })
    });
}
let L = y.Z.Millis.DAYS_30;
function x(e) {
    var n;
    let { giftingPromotionConfig: r, disabled: i, channel: u } = e,
        { analyticsLocations: y } = (0, f.ZP)(d.Z.GIFT_BUTTON),
        [T, C] = o.useState(!1),
        R = (0, s.e7)([E.Z], () => !(null === E.Z || void 0 === E.Z ? void 0 : E.Z.hasLayers())),
        x = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        w = null != x ? b.default.age(x.id) : 0,
        { giftBoxAnimation: P, trinketsAnimation: M } = null !== (n = null == r ? void 0 : r.chatGiftIcon) && void 0 !== n ? n : {},
        k = (0, m.u)(),
        U = void 0 !== k && !i && R && w >= L,
        [B, G] = (0, h.XR)(U ? l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, p.t)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        Z = null != B,
        F = T || Z,
        V = (0, I.Ft)(u);
    if (i) return null;
    let j = () => {
            (0, _.Z)({
                isGift: !0,
                giftRecipient: null == V ? void 0 : V,
                initialPlanId: null,
                analyticsLocations: y,
                analyticsObject: {
                    page: u.isPrivate() ? S.ZY5.DM_CHANNEL : S.ZY5.GUILD_CHANNEL,
                    section: S.jXE.CHANNEL_TEXT_AREA,
                    object: S.qAy.GIFTING_PROMOTION_BUTTON,
                    objectType: S.Qqv.GIFT
                }
            });
        },
        H = () => {
            C(!1), G(A.L.TAKE_ACTION), j();
        };
    return (0, a.jsxs)('div', {
        className: N.container,
        onMouseEnter: () => {
            !T && C(!0);
        },
        onMouseLeave: () => {
            C(!1);
        },
        children: [
            void 0 !== k &&
                Z &&
                (0, a.jsx)(g.Z, {
                    onComplete: () => C(!1),
                    onCheckItOutClick: j,
                    markAsDismissed: G,
                    config: k
                }),
            void 0 !== P
                ? (0, a.jsx)(O, {
                      config: P,
                      hovered: F,
                      onClick: H
                  })
                : void 0 !== M
                  ? (0, a.jsx)(D, {
                        config: M,
                        hovered: F,
                        onClick: H
                    })
                  : (0, a.jsx)(c.GiftIcon, {})
        ]
    });
}
n.Z = o.memo(x);

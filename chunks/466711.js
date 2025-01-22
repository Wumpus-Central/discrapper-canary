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
    m = r(802408),
    g = r(819640),
    E = r(594174),
    v = r(70956),
    y = r(709054),
    b = r(51144),
    I = r(443603),
    T = r(981631),
    S = r(921944),
    A = r(388032),
    C = r(17823),
    N = r(553796);
function R(e) {
    return (0, a.jsx)(I.Z, {
        innerClassName: N.button,
        'aria-label': A.intl.string(A.t.Z1RnTk),
        isActive: !1,
        onClick: e.onClick,
        children: (0, a.jsx)('div', {
            className: C.iconContainer,
            children: e.hovered
                ? (0, a.jsx)(c.LottieAnimation, {
                      className: C.giftBoxIcon,
                      importData: e.config.getAnimationData
                  })
                : (0, a.jsx)(c.GiftIcon, {})
        })
    });
}
function O(e) {
    let { Component: n, events: r, play: i } = (0, u.$)(),
        o = () => {
            var n;
            i(), null === (n = e.onClick) || void 0 === n || n.call(e);
        };
    return (0, a.jsx)(I.Z, {
        innerClassName: N.button,
        'aria-label': A.intl.string(A.t.Z1RnTk),
        isActive: !1,
        onClick: o,
        ...r,
        children: (0, a.jsxs)('div', {
            className: C.iconContainer,
            children: [
                (0, a.jsx)(n, {
                    className: C.trinketsIcon,
                    color: 'currentColor'
                }),
                e.hovered &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(c.LottieAnimation, {
                                className: C.trinketsDecoration,
                                importData: e.config.getAnimationData
                            }),
                            (0, a.jsx)('div', { className: C.trinketsGlowMask }),
                            (0, a.jsx)(c.LottieAnimation, {
                                className: C.trinketsGlow,
                                importData: e.config.getGlowAnimationData
                            })
                        ]
                    })
            ]
        })
    });
}
let D = v.Z.Millis.DAYS_30;
function L(e) {
    var n;
    let { giftingPromotionConfig: r, disabled: i, channel: u } = e,
        { analyticsLocations: v } = (0, f.ZP)(d.Z.GIFT_BUTTON),
        [I, A] = o.useState(!1),
        N = (0, s.e7)([g.Z], () => !(null === g.Z || void 0 === g.Z ? void 0 : g.Z.hasLayers())),
        L = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        x = null != L ? y.default.age(L.id) : 0,
        { giftBoxAnimation: w, trinketsAnimation: P } = null !== (n = null == r ? void 0 : r.chatGiftIcon) && void 0 !== n ? n : {},
        M = null != r.firstTimeNotice && !i && N && x >= D,
        [k, U] = (0, h.XR)(M ? l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, p.t)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        B = null != k,
        G = I || B,
        Z = (0, b.Ft)(u);
    if (i) return null;
    let F = () => {
            (0, _.Z)({
                isGift: !0,
                giftRecipient: null == Z ? void 0 : Z,
                initialPlanId: null,
                analyticsLocations: v,
                analyticsObject: {
                    page: u.isPrivate() ? T.ZY5.DM_CHANNEL : T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.CHANNEL_TEXT_AREA,
                    object: T.qAy.GIFTING_PROMOTION_BUTTON,
                    objectType: T.Qqv.GIFT
                }
            });
        },
        V = () => {
            A(!1), U(S.L.TAKE_ACTION), F();
        };
    return (0, a.jsxs)('div', {
        className: C.container,
        onMouseEnter: () => {
            !I && A(!0);
        },
        onMouseLeave: () => {
            A(!1);
        },
        children: [
            null != r.firstTimeNotice &&
                B &&
                (0, a.jsx)(m.Z, {
                    onComplete: () => A(!1),
                    onCheckItOutClick: F,
                    markAsDismissed: U,
                    config: r.firstTimeNotice
                }),
            void 0 !== w
                ? (0, a.jsx)(R, {
                      config: w,
                      hovered: G,
                      onClick: V
                  })
                : void 0 !== P
                  ? (0, a.jsx)(O, {
                        config: P,
                        hovered: G,
                        onClick: V
                    })
                  : (0, a.jsx)(c.GiftIcon, {})
        ]
    });
}
n.Z = o.memo(L);

n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(704215),
    o = n(996146),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(644916),
    f = n(243778),
    _ = n(963249),
    p = n(286961),
    h = n(802408),
    m = n(819640),
    g = n(594174),
    E = n(70956),
    v = n(709054),
    y = n(51144),
    I = n(443603),
    b = n(981631),
    T = n(921944),
    S = n(388032),
    A = n(17823),
    N = n(553796);
function C(e) {
    return (0, i.jsx)(I.Z, {
        innerClassName: N.button,
        'aria-label': S.intl.string(S.t.Z1RnTk),
        isActive: !1,
        onClick: e.onClick,
        children: (0, i.jsx)('div', {
            className: A.iconContainer,
            children: e.hovered
                ? (0, i.jsx)(l.Fmz, {
                      className: A.giftBoxIcon,
                      importData: e.config.getAnimationData
                  })
                : (0, i.jsx)(l.OgN, {})
        })
    });
}
function R(e) {
    let { Component: t, events: n, play: r } = (0, o.$)(),
        a = () => {
            var t;
            r(), null === (t = e.onClick) || void 0 === t || t.call(e);
        };
    return (0, i.jsx)(I.Z, {
        innerClassName: N.button,
        'aria-label': S.intl.string(S.t.Z1RnTk),
        isActive: !1,
        onClick: a,
        ...n,
        children: (0, i.jsxs)('div', {
            className: A.iconContainer,
            children: [
                (0, i.jsx)(t, {
                    className: A.trinketsIcon,
                    color: 'currentColor'
                }),
                e.hovered &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.Fmz, {
                                className: A.trinketsDecoration,
                                importData: e.config.getAnimationData
                            }),
                            (0, i.jsx)('div', { className: A.trinketsGlowMask }),
                            (0, i.jsx)(l.Fmz, {
                                className: A.trinketsGlow,
                                importData: e.config.getGlowAnimationData
                            })
                        ]
                    })
            ]
        })
    });
}
let O = E.Z.Millis.DAYS_30;
function D(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: o, channel: E } = e,
        { analyticsLocations: I } = (0, c.ZP)(u.Z.GIFT_BUTTON),
        [S, N] = r.useState(!1),
        D = (0, a.e7)([m.Z], () => !(null === m.Z || void 0 === m.Z ? void 0 : m.Z.hasLayers())),
        x = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        L = null != x ? v.default.age(x.id) : 0,
        { giftBoxAnimation: P, trinketsAnimation: w } = null !== (t = null == n ? void 0 : n.chatGiftIcon) && void 0 !== t ? t : {},
        M = (0, p.u)(),
        k = void 0 !== M && !o && D && L >= O,
        [U, G] = (0, f.XR)(k ? s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        B = null != U,
        Z = S || B,
        F = (0, y.Ft)(E);
    if (o) return null;
    let V = () => {
            (0, _.Z)({
                isGift: !0,
                giftRecipient: null == F ? void 0 : F,
                initialPlanId: null,
                analyticsLocations: I,
                analyticsObject: {
                    page: E.isPrivate() ? b.ZY5.DM_CHANNEL : b.ZY5.GUILD_CHANNEL,
                    section: b.jXE.CHANNEL_TEXT_AREA,
                    object: b.qAy.GIFTING_PROMOTION_BUTTON,
                    objectType: b.Qqv.GIFT
                }
            });
        },
        j = () => {
            N(!1), G(T.L.TAKE_ACTION), V();
        },
        H =
            void 0 !== P
                ? (0, i.jsx)(C, {
                      config: P,
                      hovered: Z,
                      onClick: j
                  })
                : void 0 !== w
                  ? (0, i.jsx)(R, {
                        config: w,
                        hovered: Z,
                        onClick: j
                    })
                  : (0, i.jsx)(l.OgN, {});
    return (0, i.jsx)('div', {
        className: A.container,
        onMouseEnter: () => {
            S || N(!0);
        },
        onMouseLeave: () => {
            N(!1);
        },
        children:
            void 0 !== M && B
                ? (0, i.jsx)(h.Z, {
                      onComplete: () => N(!1),
                      onCheckItOutClick: V,
                      markAsDismissed: G,
                      config: M,
                      children: H
                  })
                : H
    });
}
let x = r.memo(D);

var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(704215),
    u = r(100527),
    c = r(906732),
    d = r(644916),
    f = r(243778),
    p = r(963249),
    h = r(906690),
    _ = r(802408),
    m = r(685311),
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
let R = v.Z.Millis.DAYS_30;
function O(e) {
    let { giftingPromotionVersion: n, hovered: r } = e;
    if (n === h.JY) return (0, a.jsx)(m.Z, { hovered: r });
    return null;
}
function D(e) {
    let { giftingPromotionConfig: n, disabled: r, channel: i } = e,
        { analyticsLocations: h } = (0, c.ZP)(u.Z.GIFT_BUTTON),
        [m, v] = o.useState(!1),
        D = (0, s.e7)([g.Z], () => !(null === g.Z || void 0 === g.Z ? void 0 : g.Z.hasLayers())),
        x = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        L = null != x ? y.default.age(x.id) : 0,
        w = null != n.firstTimeNotice && !r && D && L >= R,
        [P, M] = (0, f.XR)(w ? l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        k = null != P,
        U = (0, b.Ft)(i);
    if (r) return null;
    let B = () => {
        (0, p.Z)({
            isGift: !0,
            giftRecipient: null == U ? void 0 : U,
            initialPlanId: null,
            analyticsLocations: h,
            analyticsObject: {
                page: i.isPrivate() ? T.ZY5.DM_CHANNEL : T.ZY5.GUILD_CHANNEL,
                section: T.jXE.CHANNEL_TEXT_AREA,
                object: T.qAy.SEASONAL_BUTTON_ICON,
                objectType: T.Qqv.GIFT
            }
        });
    };
    return (0, a.jsxs)('div', {
        className: C.container,
        onMouseEnter: () => {
            !m && v(!0);
        },
        onMouseLeave: () => {
            v(!1);
        },
        children: [
            null != n.firstTimeNotice &&
                k &&
                (0, a.jsx)(_.Z, {
                    onComplete: () => v(!1),
                    onCheckItOutClick: B,
                    markAsDismissed: M,
                    config: n.firstTimeNotice
                }),
            (0, a.jsx)(I.Z, {
                innerClassName: N.button,
                'aria-label': A.intl.string(A.t.Z1RnTk),
                isActive: !1,
                onClick: () => {
                    v(!1), M(S.L.TAKE_ACTION), B();
                },
                children: (0, a.jsx)('div', {
                    className: C.giftIconContainer,
                    children: (0, a.jsx)(O, {
                        giftingPromotionVersion: n.dismissibleContentVersion,
                        hovered: m || k
                    })
                })
            })
        ]
    });
}
n.Z = o.memo(D);

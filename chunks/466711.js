var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(704215),
    u = r(100527),
    c = r(906732),
    d = r(644916),
    f = r(243778),
    _ = r(963249),
    h = r(906690),
    p = r(802408),
    m = r(685311),
    g = r(819640),
    E = r(594174),
    v = r(70956),
    I = r(709054),
    T = r(51144),
    b = r(443603),
    y = r(981631),
    S = r(921944),
    A = r(388032),
    N = r(17823),
    C = r(553796);
let R = v.Z.Millis.DAYS_30;
function O(e) {
    let { giftingPromotionVersion: n, hovered: r } = e;
    if (n === h.JY) return (0, a.jsx)(m.Z, { hovered: r });
    return null;
}
function D(e) {
    let { giftingPromotionConfig: n, disabled: r, channel: i } = e,
        { analyticsLocations: h } = (0, c.ZP)(u.Z.GIFT_BUTTON),
        [m, v] = s.useState(!1),
        D = (0, o.e7)([g.Z], () => !(null === g.Z || void 0 === g.Z ? void 0 : g.Z.hasLayers())),
        L = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        x = null != L ? I.default.age(L.id) : 0,
        w = null != n.firstTimeNotice && !r && D && x >= R,
        [P, M] = (0, f.XR)(w ? l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        k = null != P,
        U = (0, T.Ft)(i);
    if (r) return null;
    let B = () => {
        (0, _.Z)({
            isGift: !0,
            giftRecipient: null == U ? void 0 : U,
            initialPlanId: null,
            analyticsLocations: h,
            analyticsObject: {
                page: i.isPrivate() ? y.ZY5.DM_CHANNEL : y.ZY5.GUILD_CHANNEL,
                section: y.jXE.CHANNEL_TEXT_AREA,
                object: y.qAy.SEASONAL_BUTTON_ICON,
                objectType: y.Qqv.GIFT
            }
        });
    };
    return (0, a.jsxs)('div', {
        className: N.container,
        onMouseEnter: () => {
            !m && v(!0);
        },
        onMouseLeave: () => {
            v(!1);
        },
        children: [
            null != n.firstTimeNotice &&
                k &&
                (0, a.jsx)(p.Z, {
                    onComplete: () => v(!1),
                    onCheckItOutClick: B,
                    markAsDismissed: M,
                    config: n.firstTimeNotice
                }),
            (0, a.jsx)(b.Z, {
                innerClassName: C.button,
                'aria-label': A.intl.string(A.t.Z1RnTk),
                isActive: !1,
                onClick: () => {
                    v(!1), M(S.L.TAKE_ACTION), B();
                },
                children: (0, a.jsx)('div', {
                    className: N.giftIconContainer,
                    children: (0, a.jsx)(O, {
                        giftingPromotionVersion: n.dismissibleContentVersion,
                        hovered: m || k
                    })
                })
            })
        ]
    });
}
n.Z = s.memo(D);

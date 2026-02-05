"use strict";
n.d(t, { P: () => v, default: () => C });
var r = n(627968),
    i = n(64700),
    a = n(793574),
    s = n(688810),
    o = n(429913),
    l = n(937008),
    u = n(156312),
    c = n(166532),
    d = n(491057),
    _ = n(546042),
    f = n(721252),
    p = n(67480),
    h = n(328968),
    m = n(733391),
    g = n(11054),
    E = n(639149),
    A = n(941673),
    I = n(818348);
let T = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, i) => (0, r.jsx)(E.A, { step: i, onClose: () => n(!1), isGift: e });
};
function y(e) {
    let {
            onClose: t,
            onComplete: n,
            transitionState: i,
            applicationId: a,
            analyticsLocationObject: o,
            skuId: l,
            isGift: c,
        } = e,
        {} = (0, u.P5)(),
        { analyticsLocations: d } = (0, s.Ay)();
    return (0, r.jsx)(_.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: l,
        renderHeader: T(c),
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: d,
        transitionState: i,
    });
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        f.kJ,
        ...(e ? [A.gj] : []),
        f.zK,
        ...f.hh,
        f.r2,
        { key: c.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(g.M, { ...e }) },
    ];
}
let v = (e) => {
    let { applicationId: t, skuId: n, analyticsLocations: r } = e,
        { analyticsLocations: l } = (0, s.Ay)(r, a.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
        u = (0, o.h)(t);
    return (
        i.useEffect(() => {
            null == u ||
                null == u.guildId ||
                null == n ||
                h.A.isFetchingForSKU(n) ||
                null != p.A.get(n) ||
                (0, m.qf)(u.guildId, n);
        }, [u, n]),
        { analyticsLocations: l }
    );
};
function C(e) {
    let { loadId: t, applicationId: n, isGift: i = !1, giftRecipient: a, giftingOrigin: o, additionalUserIds: c } = e,
        { analyticsLocations: _ } = v(e);
    return (0, r.jsx)(s.f5, {
        value: _,
        children: (0, r.jsx)(u.PaymentContextProvider, {
            loadId: t,
            stepConfigs: S(i),
            applicationId: n,
            skuIDs: [e.skuId],
            activeSubscription: null,
            purchaseType: I.VV.ONE_TIME,
            isGift: i,
            children: (0, r.jsx)(d.Qt, {
                children: (0, r.jsx)(l.dX, {
                    isGift: i,
                    giftRecipient: a,
                    giftingOrigin: o,
                    additionalUserIds: c,
                    children: (0, r.jsx)(y, { ...e }),
                }),
            }),
        }),
    });
}

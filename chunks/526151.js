"use strict";
n.d(t, { Oe: () => p, mf: () => m });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(444927),
    o = n(211159),
    l = n(61299),
    u = n(178368),
    c = n(295405),
    d = n(166403),
    _ = n(786300),
    h = n(473145);
let [f, p, E] = (0, _.A)();
function m(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: _,
            children: p,
            guildId: E,
            analyticsLocation: m,
            analyticsSourceLocation: g,
            applicationId: A,
            intent: I,
            onSubscribeComplete: T,
        } = e,
        [S, y] = r.useState(t),
        [C, N] = r.useState(!0),
        v = (0, a.A)(() => Date.now()),
        R = (0, a.A)(() => (0, h.D$)(u.A.boostSlots).length),
        O = (0, o.t4)((e) => e.activeSubscription),
        b = (0, s.bG)([d.A], () => d.A.hasFetchedSubscriptions()),
        D = (0, s.bG)([c.A], () => c.A.defaultPaymentSourceId),
        L = null != O ? O.paymentSourceId : null,
        w = (0, l._V)(null != L ? L : b ? D : null);
    return (0, i.jsx)(f.Provider, {
        value: {
            numGuildBoostsToPurchase: S,
            setNumGuildBoostsToPurchase: y,
            disablePremiumUpsell: n,
            closeGuildPerksModal: _,
            guildId: E,
            paymentModalArgs: w,
            premiumSubscriptionPaymentSourceId: L,
            analyticsLocation: m,
            analyticsSourceLocation: g,
            forceDisableSubmitButton: C,
            setForceDisableSubmitButton: N,
            applicationId: A,
            intent: I,
            onSubscribeComplete: T,
            flowStartTime: v,
            existingAvailableSlotCount: R,
        },
        children: p,
    });
}

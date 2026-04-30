"use strict";
n.d(t, { U: () => l, j: () => o });
var i = n(925847),
    r = n(174459),
    s = n(927578),
    a = n(652215);
function o(e) {
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: (0, s.EL)(e)?.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status,
    };
}
function l(e, t, n) {
    let s = n ?? (0, i.A)();
    r.default.track(a.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, { location_stack: t, load_id: s, ...o(e) });
}

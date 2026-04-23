"use strict";
n.d(t, { U: () => l, j: () => o });
var r = n(925847),
    i = n(954571),
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
    let s = n ?? (0, r.A)();
    i.default.track(a.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, { location_stack: t, load_id: s, ...o(e) });
}

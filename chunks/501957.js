n.d(t, { U: () => o, j: () => l });
var i = n(925847),
    r = n(174459),
    a = n(158045),
    s = n(652215);
function l(e) {
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: (0, a.EL)(e)?.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status,
    };
}
function o(e, t, n) {
    let a = n ?? (0, i.A)();
    r.default.track(s.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, { location_stack: t, load_id: a, ...l(e) });
}

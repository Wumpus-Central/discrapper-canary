n.d(t, { U: () => u, j: () => l });
var o = n(925847),
    r = n(954571),
    a = n(927578),
    i = n(652215);
function l(e) {
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: (0, a.EL)(e)?.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status,
    };
}
function u(e, t, n) {
    let a = n ?? (0, o.A)();
    r.default.track(i.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, { location_stack: t, load_id: a, ...l(e) });
}

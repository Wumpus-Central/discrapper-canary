n.d(t, { U: () => s, j: () => l });
var o = n(925847),
    r = n(954571),
    i = n(927578),
    a = n(652215);
function l(e) {
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: (0, i.EL)(e)?.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status,
    };
}
function s(e, t, n) {
    let i = n ?? (0, o.A)();
    r.default.track(a.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, { location_stack: t, load_id: i, ...l(e) });
}

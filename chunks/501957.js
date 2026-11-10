var i = n(925847),
    r = n(129230),
    a = n(448645),
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
n.d(
    t,
    {},
    {
        U: function (e, t, n) {
            let a = n ?? (0, i.A)();
            r.default.track(s.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, { location_stack: t, load_id: a, ...l(e) });
        },
        j: l,
    },
);

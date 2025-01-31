n.d(t, {
    H: () => s,
    j: () => a
}),
    n(47120),
    n(653041);
var i = n(392711),
    r = n.n(i);
function a(e) {
    let t = (e, t) => e.subscriptionPlanId === t.subscriptionPlanId && e.subscriptionPlanPrice === t.subscriptionPlanPrice && e.amount === t.amount && r().isEqual(e.discounts, t.discounts),
        n = [],
        i = new Set();
    return (
        e.map((e) => {
            for (let r of n)
                if (t(r, e)) {
                    i.add(r.subscriptionPlanId), (r.quantity += e.quantity);
                    return;
                }
            n.push({ ...e });
        }),
        n.map((e) => {
            let t = { ...e };
            return (
                i.has(e.subscriptionPlanId) &&
                    ((t.amount = t.amount * t.quantity),
                    (t.discounts = t.discounts.map((e) => ({
                        ...e,
                        amount: e.amount * t.quantity
                    })))),
                t
            );
        })
    );
}
function s(e) {
    return {
        id: e.id,
        subscriptionPlanId: e.subscription_plan_id,
        subscriptionPlanPrice: e.subscription_plan_price,
        amount: e.amount,
        quantity: e.quantity,
        discounts: e.discounts
    };
}

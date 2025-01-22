r.d(n, {
    H: function () {
        return u;
    },
    j: function () {
        return l;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(392711),
    s = r.n(o);
function l(e) {
    let n = (e, n) => e.subscriptionPlanId === n.subscriptionPlanId && e.subscriptionPlanPrice === n.subscriptionPlanPrice && e.amount === n.amount && s().isEqual(e.discounts, n.discounts),
        r = [],
        i = new Set();
    return (
        e.map((e) => {
            for (let a of r)
                if (n(a, e)) {
                    i.add(a.subscriptionPlanId), (a.quantity += e.quantity);
                    return;
                }
            r.push({ ...e });
        }),
        r.map((e) => {
            let n = { ...e };
            return (
                i.has(e.subscriptionPlanId) &&
                    ((n.amount = n.amount * n.quantity),
                    (n.discounts = n.discounts.map((e) => ({
                        ...e,
                        amount: e.amount * n.quantity
                    })))),
                n
            );
        })
    );
}
function u(e) {
    return {
        id: e.id,
        subscriptionPlanId: e.subscription_plan_id,
        subscriptionPlanPrice: e.subscription_plan_price,
        amount: e.amount,
        quantity: e.quantity,
        discounts: e.discounts
    };
}

n.d(t, { A: () => s });
var i = n(315069),
    r = n(202541);
let a = { [r.Ff.DAY]: r.WT.DAY, [r.Ff.WEEK]: r.WT.DAY, [r.Ff.MONTH]: r.WT.MONTH, [r.Ff.YEAR]: r.WT.YEAR };
class s extends i.A {
    id;
    planIds;
    userUsageLimitInterval;
    userUsageLimitIntervalCount;
    userUsageLimit;
    amount;
    static createFromServer(e) {
        return new s({
            id: e.id,
            planIds: e.plan_ids,
            userUsageLimitInterval: e.user_usage_limit_interval,
            userUsageLimitIntervalCount: e.user_usage_limit_interval_count,
            userUsageLimit: e.user_usage_limit,
            amount: e.amount,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.planIds = e.planIds),
            (this.userUsageLimitInterval = e.userUsageLimitInterval),
            (this.userUsageLimitIntervalCount = e.userUsageLimitIntervalCount),
            (this.userUsageLimit = e.userUsageLimit),
            (this.amount = e.amount);
    }
    get intervalType() {
        return this.userUsageLimitInterval;
    }
    get intervalCount() {
        return this.userUsageLimit;
    }
    get isMultiInterval() {
        return this.userUsageLimit > 1;
    }
    get applicableSubscriptionInterval() {
        return a[this.userUsageLimitInterval];
    }
    getApproximateDiscountAmountOff(e) {
        let t = parseFloat(this.amount);
        return Number.isNaN(t) ? null : Math.round(e * (1 - t / 100));
    }
}

"use strict";
n.d(t, { A: () => s });
var i = n(315069);
class r extends i.A {
    id;
    subscriptionId;
    premiumGuildSubscription;
    canceled;
    cooldownEndsAt;
    subscription;
    static createFromServer(e, t) {
        return new r({
            id: e.id,
            subscriptionId: e.subscription_id,
            premiumGuildSubscription:
                null != e.premium_guild_subscription
                    ? { id: e.premium_guild_subscription.id, guildId: e.premium_guild_subscription.guild_id }
                    : null,
            canceled: e.canceled,
            cooldownEndsAt: e.cooldown_ends_at,
            subscription: t,
        });
    }
    isOnCooldown() {
        return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now();
    }
    isAvailable() {
        return null == this.premiumGuildSubscription && !this.isOnCooldown();
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.subscriptionId = e.subscriptionId),
            (this.premiumGuildSubscription = e.premiumGuildSubscription),
            (this.canceled = e.canceled),
            (this.cooldownEndsAt = e.cooldownEndsAt),
            (this.subscription = e.subscription);
    }
}
let s = r;

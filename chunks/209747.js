var i = r(81825);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o extends i.Z {
    static createFromServer(e, n) {
        return new o({
            id: e.id,
            subscriptionId: e.subscription_id,
            premiumGuildSubscription:
                null != e.premium_guild_subscription
                    ? {
                          id: e.premium_guild_subscription.id,
                          guildId: e.premium_guild_subscription.guild_id
                      }
                    : null,
            canceled: e.canceled,
            cooldownEndsAt: e.cooldown_ends_at,
            subscription: n
        });
    }
    isOnCooldown() {
        return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now();
    }
    isAvailable() {
        return null == this.premiumGuildSubscription && !this.isOnCooldown();
    }
    constructor(e) {
        super(), a(this, 'id', void 0), a(this, 'subscriptionId', void 0), a(this, 'premiumGuildSubscription', void 0), a(this, 'canceled', void 0), a(this, 'cooldownEndsAt', void 0), a(this, 'subscription', void 0), (this.id = e.id), (this.subscriptionId = e.subscriptionId), (this.premiumGuildSubscription = e.premiumGuildSubscription), (this.canceled = e.canceled), (this.cooldownEndsAt = e.cooldownEndsAt), (this.subscription = e.subscription);
    }
}
n.Z = o;

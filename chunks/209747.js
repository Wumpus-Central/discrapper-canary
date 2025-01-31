n.d(t, { Z: () => s });
var i = n(81825);
function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a extends i.Z {
    static createFromServer(e, t) {
        return new a({
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
            subscription: t
        });
    }
    isOnCooldown() {
        return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now();
    }
    isAvailable() {
        return null == this.premiumGuildSubscription && !this.isOnCooldown();
    }
    constructor(e) {
        super(), r(this, 'id', void 0), r(this, 'subscriptionId', void 0), r(this, 'premiumGuildSubscription', void 0), r(this, 'canceled', void 0), r(this, 'cooldownEndsAt', void 0), r(this, 'subscription', void 0), (this.id = e.id), (this.subscriptionId = e.subscriptionId), (this.premiumGuildSubscription = e.premiumGuildSubscription), (this.canceled = e.canceled), (this.cooldownEndsAt = e.cooldownEndsAt), (this.subscription = e.subscription);
    }
}
let s = a;

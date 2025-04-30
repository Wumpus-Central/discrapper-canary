n.d(t, { Z: () => a });
var r = n(81825);
function i(e, t, n) {
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
class o extends r.Z {
    static createFromServer(e, t) {
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
        super(), i(this, 'id', void 0), i(this, 'subscriptionId', void 0), i(this, 'premiumGuildSubscription', void 0), i(this, 'canceled', void 0), i(this, 'cooldownEndsAt', void 0), i(this, 'subscription', void 0), (this.id = e.id), (this.subscriptionId = e.subscriptionId), (this.premiumGuildSubscription = e.premiumGuildSubscription), (this.canceled = e.canceled), (this.cooldownEndsAt = e.cooldownEndsAt), (this.subscription = e.subscription);
    }
}
let a = o;

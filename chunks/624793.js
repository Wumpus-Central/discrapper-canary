"use strict";
n.d(t, { GO: () => _, g_: () => u, rV: () => c });
var i,
    r = n(357758),
    a = n(636537),
    s = n(315069),
    l = n(486020),
    o = n(149790),
    d = n(652215),
    c = (((i = {}).GUILD = "GUILD"), (i.APPLICATION = "APPLICATION"), i);
async function u(e) {
    let t = null;
    try {
        let n = (
            await a.Bo.get({ url: d.Rsh.EMOJI_SOURCE_DATA(e), oldFormErrors: !0, timeout: 5e3, rejectWithError: !0 })
        ).body;
        n?.type === "GUILD"
            ? (t = { guild: _.createFromServer(n.guild), type: n.type })
            : n?.type === "APPLICATION" && (t = { application: E.createFromServer(n.application), type: n.type });
    } catch {}
    return t;
}
class _ extends s.A {
    id;
    name;
    icon;
    description;
    features;
    premiumTier;
    premiumSubscriberCount;
    presenceCount;
    memberCount;
    emojis;
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.icon = e.icon),
            (this.description = e.description),
            (this.features = e.features),
            (this.premiumTier = e.premiumTier),
            (this.premiumSubscriberCount = e.premiumSubscriberCount),
            (this.presenceCount = e.presenceCount),
            (this.memberCount = e.memberCount),
            (this.emojis = e.emojis);
    }
    getIconURL(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return l.Ay.getGuildIconURL({ id: this.id, size: e, icon: this.icon, canAnimate: t });
    }
    getIconSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return l.Ay.getAnimatableSourceWithFallback(t, (t) =>
            l.Ay.getGuildIconSource({ id: this.id, size: e, icon: this.icon, canAnimate: t }),
        );
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isDiscoverable() {
        return this.hasFeature(d.GuildFeatures.DISCOVERABLE);
    }
    static async getGuildFromEmojiId(e) {
        let t = await u(e);
        return null != t && t?.type === "GUILD" ? t.guild : null;
    }
    static _mapCommon(e) {
        return { id: e.id, name: e.name, icon: e.icon, description: e.description, features: (0, r.y)(e.features) };
    }
    static createFromGuildRecord(e) {
        return new _({
            ..._._mapCommon(e),
            premiumTier: e.premiumTier,
            premiumSubscriberCount: e.premiumSubscriberCount,
            presenceCount: null,
            memberCount: null,
            emojis: null,
        });
    }
    static createFromDiscoverableGuild(e) {
        return new _({
            ..._._mapCommon(e),
            premiumTier: null,
            premiumSubscriberCount: e.premiumSubscriptionCount,
            presenceCount: e.presenceCount,
            memberCount: e.memberCount,
            emojis: e.emojis,
        });
    }
    static createFromServer(e) {
        return new _({
            ..._._mapCommon(e),
            premiumTier: e.premium_tier,
            premiumSubscriberCount: e.premium_subscription_count,
            presenceCount: e.approximate_presence_count,
            memberCount: e.approximate_member_count,
            emojis: e.emojis,
        });
    }
    static createFromGuildType(e) {
        return e instanceof _ ? e : (0, o.fh)(e) ? _.createFromGuildRecord(e) : _.createFromDiscoverableGuild(e);
    }
}
class E extends s.A {
    id;
    name;
    constructor(e) {
        super(), (this.id = e.id), (this.name = e.name);
    }
    static createFromServer(e) {
        return new E({ id: e.id, name: e.name });
    }
}

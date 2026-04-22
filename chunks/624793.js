"use strict";
n.d(t, { GO: () => _, g_: () => c, rV: () => d });
var r,
    i = n(357758),
    s = n(562465),
    a = n(315069),
    o = n(486020),
    l = n(860689),
    u = n(652215),
    d = (((r = {}).GUILD = "GUILD"), (r.APPLICATION = "APPLICATION"), r);
let c = async (e) => {
    let t = null;
    try {
        let n = (
            await s.Bo.get({ url: u.Rsh.EMOJI_SOURCE_DATA(e), oldFormErrors: !0, timeout: 5e3, rejectWithError: !0 })
        ).body;
        n?.type === "GUILD"
            ? (t = { guild: _.createFromServer(n.guild), type: n.type })
            : n?.type === "APPLICATION" && (t = { application: f.createFromServer(n.application), type: n.type });
    } catch {}
    return t;
};
class _ extends a.A {
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
        return o.Ay.getGuildIconURL({ id: this.id, size: e, icon: this.icon, canAnimate: t });
    }
    getIconSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return o.Ay.getAnimatableSourceWithFallback(t, (t) =>
            o.Ay.getGuildIconSource({ id: this.id, size: e, icon: this.icon, canAnimate: t }),
        );
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isDiscoverable() {
        return this.hasFeature(u.GuildFeatures.DISCOVERABLE);
    }
    static async getGuildFromEmojiId(e) {
        let t = await c(e);
        return null != t && t?.type === "GUILD" ? t.guild : null;
    }
    static _mapCommon(e) {
        return { id: e.id, name: e.name, icon: e.icon, description: e.description, features: (0, i.y)(e.features) };
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
        return e instanceof _ ? e : (0, l.fh)(e) ? _.createFromGuildRecord(e) : _.createFromDiscoverableGuild(e);
    }
}
class f extends a.A {
    id;
    name;
    constructor(e) {
        super(), (this.id = e.id), (this.name = e.name);
    }
    static createFromServer(e) {
        return new f({ id: e.id, name: e.name });
    }
}

n.d(t, {
    Fi: () => d,
    JO: () => f,
    w6: () => c
}),
    n(47120);
var i = n(544891),
    r = n(81825),
    a = n(601964),
    s = n(768581),
    o = n(624138),
    l = n(981631);
function u(e, t, n) {
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
var c = (function (e) {
    return (e.GUILD = 'GUILD'), (e.APPLICATION = 'APPLICATION'), e;
})({});
let d = async (e) => {
    let t = null;
    try {
        let n = (
            await i.tn.get({
                url: l.ANM.EMOJI_SOURCE_DATA(e),
                oldFormErrors: !0,
                timeout: 5000,
                rejectWithError: !0
            })
        ).body;
        (null == n ? void 0 : n.type) === 'GUILD'
            ? (t = {
                  guild: f.createFromServer(n.guild),
                  type: n.type
              })
            : (null == n ? void 0 : n.type) === 'APPLICATION' &&
              (t = {
                  application: _.createFromServer(n.application),
                  type: n.type
              });
    } catch {}
    return t;
};
class f extends r.Z {
    getIconURL(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return s.ZP.getGuildIconURL({
            id: this.id,
            size: e,
            icon: this.icon,
            canAnimate: t
        });
    }
    getIconSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return s.ZP.getAnimatableSourceWithFallback(t, (t) =>
            s.ZP.getGuildIconSource({
                id: this.id,
                size: e,
                icon: this.icon,
                canAnimate: t
            })
        );
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isDiscoverable() {
        return this.hasFeature(l.oNc.DISCOVERABLE);
    }
    get acronym() {
        return (0, o.Zg)(this.name);
    }
    static async getGuildFromEmojiId(e) {
        let t = await d(e);
        return null != t && (null == t ? void 0 : t.type) === 'GUILD' ? t.guild : null;
    }
    static _mapCommon(e) {
        var t;
        return {
            id: e.id,
            name: e.name,
            icon: e.icon,
            description: e.description,
            features: new Set(null !== (t = e.features) && void 0 !== t ? t : new Set())
        };
    }
    static createFromGuildRecord(e) {
        return new f({
            ...f._mapCommon(e),
            premiumTier: e.premiumTier,
            premiumSubscriberCount: e.premiumSubscriberCount,
            presenceCount: null,
            memberCount: null,
            emojis: null
        });
    }
    static createFromDiscoverableGuild(e) {
        return new f({
            ...f._mapCommon(e),
            premiumTier: null,
            premiumSubscriberCount: e.premiumSubscriptionCount,
            presenceCount: e.presenceCount,
            memberCount: e.memberCount,
            emojis: e.emojis
        });
    }
    static createFromServer(e) {
        return new f({
            ...f._mapCommon(e),
            premiumTier: e.premium_tier,
            premiumSubscriberCount: e.premium_subscription_count,
            presenceCount: e.approximate_presence_count,
            memberCount: e.approximate_member_count,
            emojis: e.emojis
        });
    }
    static createFromGuildType(e) {
        return e instanceof f ? e : e instanceof a.ZP ? f.createFromGuildRecord(e) : f.createFromDiscoverableGuild(e);
    }
    constructor(e) {
        super(), u(this, 'id', void 0), u(this, 'name', void 0), u(this, 'icon', void 0), u(this, 'description', void 0), u(this, 'features', void 0), u(this, 'premiumTier', void 0), u(this, 'premiumSubscriberCount', void 0), u(this, 'presenceCount', void 0), u(this, 'memberCount', void 0), u(this, 'emojis', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.description = e.description), (this.features = e.features), (this.premiumTier = e.premiumTier), (this.premiumSubscriberCount = e.premiumSubscriberCount), (this.presenceCount = e.presenceCount), (this.memberCount = e.memberCount), (this.emojis = e.emojis);
    }
}
class _ extends r.Z {
    static createFromServer(e) {
        return new _({
            id: e.id,
            name: e.name
        });
    }
    constructor(e) {
        super(), u(this, 'id', void 0), u(this, 'name', void 0), (this.id = e.id), (this.name = e.name);
    }
}

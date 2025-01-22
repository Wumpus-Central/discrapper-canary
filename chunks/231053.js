r.d(n, {
    Fi: function () {
        return p;
    },
    JO: function () {
        return h;
    },
    w6: function () {
        return i;
    }
});
var i,
    a = r(47120);
var o = r(544891),
    s = r(81825),
    l = r(601964),
    u = r(768581),
    c = r(624138),
    d = r(981631);
function f(e, n, r) {
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
!(function (e) {
    (e.GUILD = 'GUILD'), (e.APPLICATION = 'APPLICATION');
})(i || (i = {}));
let p = async (e) => {
    let n = null;
    try {
        let r = (
            await o.tn.get({
                url: d.ANM.EMOJI_SOURCE_DATA(e),
                oldFormErrors: !0,
                timeout: 5000,
                rejectWithError: !0
            })
        ).body;
        (null == r ? void 0 : r.type) === 'GUILD'
            ? (n = {
                  guild: h.createFromServer(r.guild),
                  type: r.type
              })
            : (null == r ? void 0 : r.type) === 'APPLICATION' &&
              (n = {
                  application: _.createFromServer(r.application),
                  type: r.type
              });
    } catch {}
    return n;
};
class h extends s.Z {
    getIconURL(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return u.ZP.getGuildIconURL({
            id: this.id,
            size: e,
            icon: this.icon,
            canAnimate: n
        });
    }
    getIconSource(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return u.ZP.getAnimatableSourceWithFallback(n, (n) =>
            u.ZP.getGuildIconSource({
                id: this.id,
                size: e,
                icon: this.icon,
                canAnimate: n
            })
        );
    }
    hasFeature(e) {
        return this.features.has(e);
    }
    isDiscoverable() {
        return this.hasFeature(d.oNc.DISCOVERABLE);
    }
    get acronym() {
        return (0, c.Zg)(this.name);
    }
    static async getGuildFromEmojiId(e) {
        let n = await p(e);
        return null != n && (null == n ? void 0 : n.type) === 'GUILD' ? n.guild : null;
    }
    static _mapCommon(e) {
        var n;
        return {
            id: e.id,
            name: e.name,
            icon: e.icon,
            description: e.description,
            features: new Set(null !== (n = e.features) && void 0 !== n ? n : new Set())
        };
    }
    static createFromGuildRecord(e) {
        return new h({
            ...h._mapCommon(e),
            premiumTier: e.premiumTier,
            premiumSubscriberCount: e.premiumSubscriberCount,
            presenceCount: null,
            memberCount: null,
            emojis: null
        });
    }
    static createFromDiscoverableGuild(e) {
        return new h({
            ...h._mapCommon(e),
            premiumTier: null,
            premiumSubscriberCount: e.premiumSubscriptionCount,
            presenceCount: e.presenceCount,
            memberCount: e.memberCount,
            emojis: e.emojis
        });
    }
    static createFromServer(e) {
        return new h({
            ...h._mapCommon(e),
            premiumTier: e.premium_tier,
            premiumSubscriberCount: e.premium_subscription_count,
            presenceCount: e.approximate_presence_count,
            memberCount: e.approximate_member_count,
            emojis: e.emojis
        });
    }
    static createFromGuildType(e) {
        return e instanceof h ? e : e instanceof l.ZP ? h.createFromGuildRecord(e) : h.createFromDiscoverableGuild(e);
    }
    constructor(e) {
        super(), f(this, 'id', void 0), f(this, 'name', void 0), f(this, 'icon', void 0), f(this, 'description', void 0), f(this, 'features', void 0), f(this, 'premiumTier', void 0), f(this, 'premiumSubscriberCount', void 0), f(this, 'presenceCount', void 0), f(this, 'memberCount', void 0), f(this, 'emojis', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.description = e.description), (this.features = e.features), (this.premiumTier = e.premiumTier), (this.premiumSubscriberCount = e.premiumSubscriberCount), (this.presenceCount = e.presenceCount), (this.memberCount = e.memberCount), (this.emojis = e.emojis);
    }
}
class _ extends s.Z {
    static createFromServer(e) {
        return new _({
            id: e.id,
            name: e.name
        });
    }
    constructor(e) {
        super(), f(this, 'id', void 0), f(this, 'name', void 0), (this.id = e.id), (this.name = e.name);
    }
}

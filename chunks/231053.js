n.d(t, {
    Fi: () => p,
    JO: () => h,
    w6: () => _
}),
    n(266796),
    n(47120);
var r = n(544891),
    i = n(81825),
    o = n(601964),
    a = n(768581),
    s = n(624138),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var _ = (function (e) {
    return (e.GUILD = 'GUILD'), (e.APPLICATION = 'APPLICATION'), e;
})({});
let p = async (e) => {
    let t = null;
    try {
        let n = (
            await r.tn.get({
                url: l.ANM.EMOJI_SOURCE_DATA(e),
                oldFormErrors: !0,
                timeout: 5000,
                rejectWithError: !0
            })
        ).body;
        (null == n ? void 0 : n.type) === 'GUILD'
            ? (t = {
                  guild: h.createFromServer(n.guild),
                  type: n.type
              })
            : (null == n ? void 0 : n.type) === 'APPLICATION' &&
              (t = {
                  application: m.createFromServer(n.application),
                  type: n.type
              });
    } catch (e) {}
    return t;
};
class h extends i.Z {
    getIconURL(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return a.ZP.getGuildIconURL({
            id: this.id,
            size: e,
            icon: this.icon,
            canAnimate: t
        });
    }
    getIconSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return a.ZP.getAnimatableSourceWithFallback(t, (t) =>
            a.ZP.getGuildIconSource({
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
        return (0, s.Zg)(this.name);
    }
    static async getGuildFromEmojiId(e) {
        let t = await p(e);
        return null != t && (null == t ? void 0 : t.type) === 'GUILD' ? t.guild : null;
    }
    static _mapCommon(e) {
        var t;
        return {
            id: e.id,
            name: e.name,
            icon: e.icon,
            description: e.description,
            features: new Set(null != (t = e.features) ? t : new Set())
        };
    }
    static createFromGuildRecord(e) {
        return new h(
            f(u({}, h._mapCommon(e)), {
                premiumTier: e.premiumTier,
                premiumSubscriberCount: e.premiumSubscriberCount,
                presenceCount: null,
                memberCount: null,
                emojis: null
            })
        );
    }
    static createFromDiscoverableGuild(e) {
        return new h(
            f(u({}, h._mapCommon(e)), {
                premiumTier: null,
                premiumSubscriberCount: e.premiumSubscriptionCount,
                presenceCount: e.presenceCount,
                memberCount: e.memberCount,
                emojis: e.emojis
            })
        );
    }
    static createFromServer(e) {
        return new h(
            f(u({}, h._mapCommon(e)), {
                premiumTier: e.premium_tier,
                premiumSubscriberCount: e.premium_subscription_count,
                presenceCount: e.approximate_presence_count,
                memberCount: e.approximate_member_count,
                emojis: e.emojis
            })
        );
    }
    static createFromGuildType(e) {
        return e instanceof h ? e : e instanceof o.ZP ? h.createFromGuildRecord(e) : h.createFromDiscoverableGuild(e);
    }
    constructor(e) {
        super(), c(this, 'id', void 0), c(this, 'name', void 0), c(this, 'icon', void 0), c(this, 'description', void 0), c(this, 'features', void 0), c(this, 'premiumTier', void 0), c(this, 'premiumSubscriberCount', void 0), c(this, 'presenceCount', void 0), c(this, 'memberCount', void 0), c(this, 'emojis', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.description = e.description), (this.features = e.features), (this.premiumTier = e.premiumTier), (this.premiumSubscriberCount = e.premiumSubscriberCount), (this.presenceCount = e.presenceCount), (this.memberCount = e.memberCount), (this.emojis = e.emojis);
    }
}
class m extends i.Z {
    static createFromServer(e) {
        return new m({
            id: e.id,
            name: e.name
        });
    }
    constructor(e) {
        super(), c(this, 'id', void 0), c(this, 'name', void 0), (this.id = e.id), (this.name = e.name);
    }
}

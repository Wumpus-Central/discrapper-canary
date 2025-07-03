(n.d(t, {
    Fi: () => _,
    JO: () => p,
    w6: () => f
}),
    n(953529),
    n(388685));
var r = n(544891),
    i = n(81825),
    a = n(601964),
    o = n(768581),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var f = (function (e) {
    return ((e.GUILD = 'GUILD'), (e.APPLICATION = 'APPLICATION'), e);
})({});
let _ = async (e) => {
    let t = null;
    try {
        let n = (
            await r.tn.get({
                url: s.ANM.EMOJI_SOURCE_DATA(e),
                oldFormErrors: !0,
                timeout: 5000,
                rejectWithError: !0
            })
        ).body;
        (null == n ? void 0 : n.type) === 'GUILD'
            ? (t = {
                  guild: p.createFromServer(n.guild),
                  type: n.type
              })
            : (null == n ? void 0 : n.type) === 'APPLICATION' &&
              (t = {
                  application: h.createFromServer(n.application),
                  type: n.type
              });
    } catch (e) {}
    return t;
};
class p extends i.Z {
    getIconURL(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return o.ZP.getGuildIconURL({
            id: this.id,
            size: e,
            icon: this.icon,
            canAnimate: t
        });
    }
    getIconSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return o.ZP.getAnimatableSourceWithFallback(t, (t) =>
            o.ZP.getGuildIconSource({
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
        return this.hasFeature(s.oNc.DISCOVERABLE);
    }
    static async getGuildFromEmojiId(e) {
        let t = await _(e);
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
        return new p(
            d(c({}, p._mapCommon(e)), {
                premiumTier: e.premiumTier,
                premiumSubscriberCount: e.premiumSubscriberCount,
                presenceCount: null,
                memberCount: null,
                emojis: null
            })
        );
    }
    static createFromDiscoverableGuild(e) {
        return new p(
            d(c({}, p._mapCommon(e)), {
                premiumTier: null,
                premiumSubscriberCount: e.premiumSubscriptionCount,
                presenceCount: e.presenceCount,
                memberCount: e.memberCount,
                emojis: e.emojis
            })
        );
    }
    static createFromServer(e) {
        return new p(
            d(c({}, p._mapCommon(e)), {
                premiumTier: e.premium_tier,
                premiumSubscriberCount: e.premium_subscription_count,
                presenceCount: e.approximate_presence_count,
                memberCount: e.approximate_member_count,
                emojis: e.emojis
            })
        );
    }
    static createFromGuildType(e) {
        return e instanceof p ? e : e instanceof a.ZP ? p.createFromGuildRecord(e) : p.createFromDiscoverableGuild(e);
    }
    constructor(e) {
        (super(), l(this, 'id', void 0), l(this, 'name', void 0), l(this, 'icon', void 0), l(this, 'description', void 0), l(this, 'features', void 0), l(this, 'premiumTier', void 0), l(this, 'premiumSubscriberCount', void 0), l(this, 'presenceCount', void 0), l(this, 'memberCount', void 0), l(this, 'emojis', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.description = e.description), (this.features = e.features), (this.premiumTier = e.premiumTier), (this.premiumSubscriberCount = e.premiumSubscriberCount), (this.presenceCount = e.presenceCount), (this.memberCount = e.memberCount), (this.emojis = e.emojis));
    }
}
class h extends i.Z {
    static createFromServer(e) {
        return new h({
            id: e.id,
            name: e.name
        });
    }
    constructor(e) {
        (super(), l(this, 'id', void 0), l(this, 'name', void 0), (this.id = e.id), (this.name = e.name));
    }
}

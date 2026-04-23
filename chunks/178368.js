"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(166403);
let a = !1,
    o = !1,
    l = {};
function d(e) {
    let { guildBoostSlot: t } = e;
    l = { ...l, [t.id]: t };
}
function _() {
    let e = {};
    for (let t of Object.values(l)) (e[t.id] = t), (t.subscription = s.A.getSubscriptionById(t.subscriptionId));
    l = e;
}
class u extends i.Ay.Store {
    static displayName = "GuildBoostSlotStore";
    initialize() {
        this.syncWith([s.A], _);
    }
    get hasFetched() {
        return a;
    }
    get isFetching() {
        return o;
    }
    get boostSlots() {
        return l;
    }
    getGuildBoostSlot(e) {
        return l[e];
    }
}
let c = new u(r.h, {
    GUILD_BOOST_SLOTS_FETCH: function () {
        o = !0;
    },
    GUILD_BOOST_SLOTS_FETCH_SUCCESS: function (e) {
        let { guildBoostSlots: t } = e;
        (l = {}),
            t.forEach((e) => {
                l[e.id] = e;
            }),
            (o = !1),
            (a = !0);
    },
    GUILD_BOOST_SLOT_UPDATE_SUCCESS: d,
    GUILD_BOOST_SLOT_CREATE: d,
    GUILD_BOOST_SLOT_UPDATE: d,
    LOGOUT: function () {
        (l = {}), (a = !1), (o = !1);
    },
});

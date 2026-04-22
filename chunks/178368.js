"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(166403);
let a = !1,
    o = !1,
    l = {};
function u(e) {
    let { guildBoostSlot: t } = e;
    l = { ...l, [t.id]: t };
}
function d() {
    let e = {};
    for (let t of Object.values(l)) (e[t.id] = t), (t.subscription = s.A.getSubscriptionById(t.subscriptionId));
    l = e;
}
class c extends r.Ay.Store {
    static displayName = "GuildBoostSlotStore";
    initialize() {
        this.syncWith([s.A], d);
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
let _ = new c(i.h, {
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
    GUILD_BOOST_SLOT_UPDATE_SUCCESS: u,
    GUILD_BOOST_SLOT_CREATE: u,
    GUILD_BOOST_SLOT_UPDATE: u,
    LOGOUT: function () {
        (l = {}), (a = !1), (o = !1);
    },
});

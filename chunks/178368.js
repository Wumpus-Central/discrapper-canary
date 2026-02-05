"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
    a = n(166403);
let s = !1,
    o = !1,
    l = {};
function u() {
    o = !0;
}
function c(e) {
    let { guildBoostSlots: t } = e;
    (l = {}),
        t.forEach((e) => {
            l[e.id] = e;
        }),
        (o = !1),
        (s = !0);
}
function d(e) {
    let { guildBoostSlot: t } = e;
    l = { ...l, [t.id]: t };
}
function _() {
    (l = {}), (s = !1), (o = !1);
}
function f() {
    let e = {};
    for (let t of Object.values(l)) (e[t.id] = t), (t.subscription = a.A.getSubscriptionById(t.subscriptionId));
    l = e;
}
class p extends r.Ay.Store {
    static displayName = "GuildBoostSlotStore";
    initialize() {
        this.syncWith([a.A], f);
    }
    get hasFetched() {
        return s;
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
let h = new p(i.h, {
    GUILD_BOOST_SLOTS_FETCH: u,
    GUILD_BOOST_SLOTS_FETCH_SUCCESS: c,
    GUILD_BOOST_SLOT_UPDATE_SUCCESS: d,
    GUILD_BOOST_SLOT_CREATE: d,
    GUILD_BOOST_SLOT_UPDATE: d,
    LOGOUT: _,
});

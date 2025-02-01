n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(78839);
function o(e, t, n) {
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
let l = !1,
    u = {};
function c(e) {
    let { guildBoostSlots: t } = e;
    (u = {}),
        t.forEach((e) => {
            u[e.id] = e;
        }),
        (l = !0);
}
function d(e) {
    let { guildBoostSlot: t } = e;
    u = {
        ...u,
        [t.id]: t
    };
}
function f() {
    (u = {}), (l = !1);
}
function _() {
    let e = {};
    for (let t of Object.values(u)) (e[t.id] = t), (t.subscription = s.ZP.getSubscriptionById(t.subscriptionId));
    u = e;
}
class p extends (i = r.ZP.Store) {
    initialize() {
        this.syncWith([s.ZP], _);
    }
    get hasFetched() {
        return l;
    }
    get boostSlots() {
        return u;
    }
    getGuildBoostSlot(e) {
        return u[e];
    }
}
o(p, 'displayName', 'GuildBoostSlotStore');
let h = new p(a.Z, {
    GUILD_BOOST_SLOTS_FETCH_SUCCESS: c,
    GUILD_BOOST_SLOT_UPDATE_SUCCESS: d,
    GUILD_BOOST_SLOT_CREATE: d,
    GUILD_BOOST_SLOT_UPDATE: d,
    LOGOUT: f
});

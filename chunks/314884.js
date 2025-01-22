var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(78839);
function u(e, n, r) {
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
let c = !1,
    d = {};
function f(e) {
    let { guildBoostSlots: n } = e;
    (d = {}),
        n.forEach((e) => {
            d[e.id] = e;
        }),
        (c = !0);
}
function p(e) {
    let { guildBoostSlot: n } = e;
    d = {
        ...d,
        [n.id]: n
    };
}
function h() {
    (d = {}), (c = !1);
}
function _() {
    let e = {};
    for (let n of Object.values(d)) (e[n.id] = n), (n.subscription = l.ZP.getSubscriptionById(n.subscriptionId));
    d = e;
}
class m extends (i = o.ZP.Store) {
    initialize() {
        this.syncWith([l.ZP], _);
    }
    get hasFetched() {
        return c;
    }
    get boostSlots() {
        return d;
    }
    getGuildBoostSlot(e) {
        return d[e];
    }
}
u(m, 'displayName', 'GuildBoostSlotStore'),
    (n.Z = new m(s.Z, {
        GUILD_BOOST_SLOTS_FETCH_SUCCESS: f,
        GUILD_BOOST_SLOT_UPDATE_SUCCESS: p,
        GUILD_BOOST_SLOT_CREATE: p,
        GUILD_BOOST_SLOT_UPDATE: p,
        LOGOUT: h
    }));

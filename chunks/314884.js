n.d(t, { Z: () => y }), n(388685);
var r,
    i = n(442837),
    o = n(570140),
    a = n(78839);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = !1,
    f = !1,
    _ = {};
function p() {
    f = !0;
}
function h(e) {
    let { guildBoostSlots: t } = e;
    (_ = {}),
        t.forEach((e) => {
            _[e.id] = e;
        }),
        (f = !1),
        (d = !0);
}
function m(e) {
    let { guildBoostSlot: t } = e;
    _ = u(l({}, _), { [t.id]: t });
}
function g() {
    (_ = {}), (d = !1), (f = !1);
}
function E() {
    let e = {};
    for (let t of Object.values(_)) (e[t.id] = t), (t.subscription = a.ZP.getSubscriptionById(t.subscriptionId));
    _ = e;
}
class b extends (r = i.ZP.Store) {
    initialize() {
        this.syncWith([a.ZP], E);
    }
    get hasFetched() {
        return d;
    }
    get isFetching() {
        return f;
    }
    get boostSlots() {
        return _;
    }
    getGuildBoostSlot(e) {
        return _[e];
    }
}
s(b, 'displayName', 'GuildBoostSlotStore');
let y = new b(o.Z, {
    GUILD_BOOST_SLOTS_FETCH: p,
    GUILD_BOOST_SLOTS_FETCH_SUCCESS: h,
    GUILD_BOOST_SLOT_UPDATE_SUCCESS: m,
    GUILD_BOOST_SLOT_CREATE: m,
    GUILD_BOOST_SLOT_UPDATE: m,
    LOGOUT: g
});

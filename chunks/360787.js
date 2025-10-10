n.d(t, { Z: () => C }), n(388685), n(539854);
var i,
    r,
    l = n(442837),
    a = n(846519),
    o = n(570140),
    s = n(278323),
    c = n(158776),
    u = n(701488);
function d(e, t) {
    return "".concat(e, ":").concat(t);
}
let p = {},
    h = {},
    f = new a.sW(3000, function () {
        let e = [];
        for (let [t, n] of Object.entries(h)) e.push(n), (p[t] = n), delete h[t];
        0 !== e.length && s.Z.subscribeActivities(e);
    });
function m(e) {
    let t = d(e.applicationId, e.partyId);
    return t in p || t in h;
}
function g() {
    (p = {}), (h = {});
}
class b extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isSubscribed(e) {
        return m(e);
    }
}
(r = "displayName") in b
    ? Object.defineProperty(b, r, {
          value: "PresenceSubscriptionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (b[r] = "PresenceSubscriptionsStore");
let C = new b(o.Z, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(p)) i.expiresAt < t && (delete p[n], (e = !0));
                for (let [n, i] of Object.entries(h)) i.expiresAt < t && (delete h[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: r, partyId: l, messageId: a, channelId: o, inviteTime: s } = t;
        if (m(t) || s + u.$y < Date.now()) return n;
        let c = d(r, l),
            g = u.$y + Date.now();
        return (
            (h[c] = {
                userId: i,
                applicationId: r,
                partyId: l,
                messageId: a,
                channelId: o,
                expiresAt: g,
            }),
            f.delay(),
            !0
        );
    },
    CONNECTION_OPEN: g,
    CONNECTION_RESUMED: g,
    LOGOUT: function () {
        (p = {}), (h = {});
    },
});

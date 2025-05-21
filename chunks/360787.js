n.d(t, { Z: () => x }), n(388685), n(539854);
var r,
    i,
    l,
    a = n(442837),
    o = n(846519),
    s = n(570140),
    c = n(278323),
    u = n(158776),
    d = n(701488);
function p(e, t) {
    return ''.concat(e, ':').concat(t);
}
let h = {},
    f = {},
    m = new o.sW(3000, function () {
        let e = [];
        for (let [t, n] of Object.entries(f)) e.push(n), (h[t] = n), delete f[t];
        0 !== e.length && c.Z.subscribeActivities(e);
    });
function g(e) {
    let t = p(e.applicationId, e.partyId);
    return t in h || t in f;
}
function b() {
    (h = {}), (f = {});
}
class _ extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    isSubscribed(e) {
        return g(e);
    }
}
(l = 'PresenceSubscriptionsStore'),
    (i = 'displayName') in _
        ? Object.defineProperty(_, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[i] = l);
let x = new _(s.Z, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, r] of Object.entries(h)) r.expiresAt < t && (delete h[n], (e = !0));
                for (let [n, r] of Object.entries(f)) r.expiresAt < t && (delete f[n], (e = !0));
                return e;
            })(),
            { userId: r, applicationId: i, partyId: l, messageId: a, channelId: o, inviteTime: s } = t;
        if (g(t) || s + d.$y < Date.now()) return n;
        let c = p(i, l),
            u = d.$y + Date.now();
        return (
            (f[c] = {
                userId: r,
                applicationId: i,
                partyId: l,
                messageId: a,
                channelId: o,
                expiresAt: u
            }),
            m.delay(),
            !0
        );
    },
    CONNECTION_OPEN: b,
    CONNECTION_RESUMED: b,
    LOGOUT: function () {
        (h = {}), (f = {});
    }
});

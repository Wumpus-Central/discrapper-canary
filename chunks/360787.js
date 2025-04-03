n.d(t, { Z: () => y }), n(47120), n(653041);
var r,
    i,
    l,
    o = n(442837),
    a = n(846519),
    s = n(570140),
    c = n(278323),
    u = n(158776),
    d = n(981631),
    p = n(701488);
function h(e, t) {
    return ''.concat(e, ':').concat(t);
}
let f = {},
    m = {},
    g = new a.sW(3000, function () {
        let e = [];
        for (let [t, n] of Object.entries(m)) {
            let { userId: r } = n;
            u.Z.getStatus(r) !== d.Skl.OFFLINE && (e.push(n), (f[t] = n)), delete m[t];
        }
        0 !== e.length && c.Z.subscribeActivities(e);
    });
function b(e) {
    let t = h(e.applicationId, e.partyId);
    return t in f || t in m;
}
function _() {
    (f = {}), (m = {});
}
class C extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    isSubscribed(e) {
        return b(e);
    }
}
(l = 'PresenceSubscriptionsStore'),
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = l);
let y = new C(s.Z, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, r] of Object.entries(f)) r.expiresAt < t && (delete f[n], (e = !0));
                for (let [n, r] of Object.entries(m)) r.expiresAt < t && (delete m[n], (e = !0));
                return e;
            })(),
            { userId: r, applicationId: i, partyId: l, messageId: o, channelId: a, inviteTime: s } = t;
        if (b(t) || s + p.$y < Date.now()) return n;
        let c = h(i, l),
            u = p.$y + Date.now();
        return (
            (m[c] = {
                userId: r,
                applicationId: i,
                partyId: l,
                messageId: o,
                channelId: a,
                expiresAt: u
            }),
            g.delay(),
            !0
        );
    },
    CONNECTION_OPEN: _,
    CONNECTION_RESUMED: _,
    LOGOUT: function () {
        (f = {}), (m = {});
    }
});

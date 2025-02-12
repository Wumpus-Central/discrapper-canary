n.d(t, { Z: () => v }), n(47120), n(653041);
var i,
    l,
    a,
    r = n(442837),
    s = n(846519),
    o = n(570140),
    c = n(278323),
    d = n(158776),
    u = n(981631),
    h = n(701488);
function p(e, t) {
    return ''.concat(e, ':').concat(t);
}
let m = {},
    f = {},
    g = new s.sW(3000, function () {
        let e = [];
        for (let [t, n] of Object.entries(f)) {
            let { userId: i } = n;
            d.Z.getStatus(i) !== u.Skl.OFFLINE && (e.push(n), (m[t] = n)), delete f[t];
        }
        0 !== e.length && c.Z.subscribeActivities(e);
    });
function _(e) {
    let t = p(e.applicationId, e.partyId);
    return t in m || t in f;
}
function C() {
    (m = {}), (f = {});
}
class x extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    isSubscribed(e) {
        return _(e);
    }
}
(a = 'PresenceSubscriptionsStore'),
    (l = 'displayName') in x
        ? Object.defineProperty(x, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (x[l] = a);
let v = new x(o.Z, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(m)) i.expiresAt < t && (delete m[n], (e = !0));
                for (let [n, i] of Object.entries(f)) i.expiresAt < t && (delete f[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: l, partyId: a, messageId: r, channelId: s, inviteTime: o } = t;
        if (_(t) || o + h.$y < Date.now()) return n;
        let c = p(l, a),
            d = h.$y + Date.now();
        return (
            (f[c] = {
                userId: i,
                applicationId: l,
                partyId: a,
                messageId: r,
                channelId: s,
                expiresAt: d
            }),
            g.delay(),
            !0
        );
    },
    CONNECTION_OPEN: C,
    CONNECTION_RESUMED: C,
    LOGOUT: function () {
        (m = {}), (f = {});
    }
});

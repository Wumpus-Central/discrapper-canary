(n.d(t, { Z: () => I }), n(388685), n(539854));
var r,
    i = n(442837),
    a = n(846519),
    o = n(570140),
    s = n(278323),
    l = n(158776),
    c = n(701488);
function u(e, t, n) {
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
function d(e, t) {
    return ''.concat(e, ':').concat(t);
}
let f = {},
    _ = {};
function p() {
    let e = !1,
        t = Date.now();
    for (let [n, r] of Object.entries(f)) r.expiresAt < t && (delete f[n], (e = !0));
    for (let [n, r] of Object.entries(_)) r.expiresAt < t && (delete _[n], (e = !0));
    return e;
}
function h() {
    let e = [];
    for (let [t, n] of Object.entries(_)) (e.push(n), (f[t] = n), delete _[t]);
    0 !== e.length && s.Z.subscribeActivities(e);
}
let m = 3000,
    g = new a.sW(m, h);
function E(e) {
    let t = d(e.applicationId, e.partyId);
    return t in f || t in _;
}
function b(e) {
    let { subscription: t } = e,
        n = p(),
        { userId: r, applicationId: i, partyId: a, messageId: o, channelId: s, inviteTime: l } = t;
    if (E(t) || l + c.$y < Date.now()) return n;
    let u = d(i, a),
        f = c.$y + Date.now();
    return (
        (_[u] = {
            userId: r,
            applicationId: i,
            partyId: a,
            messageId: o,
            channelId: s,
            expiresAt: f
        }),
        g.delay(),
        !0
    );
}
function y() {
    ((f = {}), (_ = {}));
}
function O() {
    ((f = {}), (_ = {}));
}
class v extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
    }
    isSubscribed(e) {
        return E(e);
    }
}
u(v, 'displayName', 'PresenceSubscriptionsStore');
let I = new v(o.Z, {
    PRESENCE_SUBSCRIPTIONS_ADD: b,
    CONNECTION_OPEN: y,
    CONNECTION_RESUMED: y,
    LOGOUT: O
});

n.d(t, {
    i: () => d,
    l: () => f
}),
    n(47120);
var r = n(788347),
    i = n(372793),
    o = n(684233),
    a = n(731965),
    s = n(433517),
    l = n(590433);
function c() {
    var e;
    return new Set(null != (e = s.K.get(l.hL)) ? e : []);
}
let u = (0, o.M)((e, t) => ({
    notificationDismissedInGuilds: c(),
    dismissNotification: (n) => {
        let r = t().notificationDismissedInGuilds;
        r.add(n), s.K.set(l.hL, r), (0, a.j)(() => e({ notificationDismissedInGuilds: r }));
    },
    resetNotification: (n) => {
        let r = t().notificationDismissedInGuilds;
        r.has(n) && (r.delete(n), s.K.set(l.hL, r), (0, a.j)(() => e({ notificationDismissedInGuilds: r })));
    }
}));
function d(e) {
    let [t, n] = (0, i.s)(u, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], r.X);
    return [!t.has(e), n];
}
function f(e) {
    return u.getState().resetNotification(e);
}

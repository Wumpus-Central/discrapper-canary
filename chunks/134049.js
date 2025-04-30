n.d(t, {
    i: () => d,
    l: () => f
}),
    n(388685);
var r = n(760907),
    i = n(519772),
    a = n(648820),
    o = n(731965),
    s = n(433517),
    l = n(590433);
function c() {
    var e;
    return new Set(null != (e = s.K.get(l.hL)) ? e : []);
}
let u = (0, a.M)((e, t) => ({
    notificationDismissedInGuilds: c(),
    dismissNotification: (n) => {
        let r = t().notificationDismissedInGuilds;
        r.add(n), s.K.set(l.hL, r), (0, o.j)(() => e({ notificationDismissedInGuilds: r }));
    },
    resetNotification: (n) => {
        let r = t().notificationDismissedInGuilds;
        r.has(n) && (r.delete(n), s.K.set(l.hL, r), (0, o.j)(() => e({ notificationDismissedInGuilds: r })));
    }
}));
function d(e) {
    let [t, n] = (0, i.s)(u, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], r.X);
    return [!t.has(e), n];
}
function f(e) {
    return u.getState().resetNotification(e);
}

n.d(t, {
    i: () => d,
    l: () => f
}),
    n(47120);
var i = n(232713),
    r = n(65400),
    a = n(5907),
    s = n(731965),
    o = n(433517),
    l = n(590433);
function u() {
    var e;
    return new Set(null !== (e = o.K.get(l.hL)) && void 0 !== e ? e : []);
}
let c = (0, a.M)((e, t) => ({
    notificationDismissedInGuilds: u(),
    dismissNotification: (n) => {
        let i = t().notificationDismissedInGuilds;
        i.add(n), o.K.set(l.hL, i), (0, s.j)(() => e({ notificationDismissedInGuilds: i }));
    },
    resetNotification: (n) => {
        let i = t().notificationDismissedInGuilds;
        i.has(n) && (i.delete(n), o.K.set(l.hL, i), (0, s.j)(() => e({ notificationDismissedInGuilds: i })));
    }
}));
function d(e) {
    let [t, n] = (0, r.s)(c, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], i.X);
    return [!t.has(e), n];
}
function f(e) {
    return c.getState().resetNotification(e);
}

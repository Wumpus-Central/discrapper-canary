n.d(t, {
    G: () => f,
    n: () => d,
}),
    n(896048);
var r = n(942381),
    i = n(265690),
    a = n(870844),
    s = n(121894),
    o = n(506774),
    l = n(200700);
function c() {
    var e;
    return new Set(null != (e = o.w.get(l.hs)) ? e : []);
}
let u = (0, a.y)((e, t) => ({
    notificationDismissedInGuilds: c(),
    dismissNotification: (n) => {
        let r = t().notificationDismissedInGuilds;
        r.add(n), o.w.set(l.hs, r), (0, s.r)(() => e({ notificationDismissedInGuilds: r }));
    },
    resetNotification: (n) => {
        let r = t().notificationDismissedInGuilds;
        r.has(n) && (r.delete(n), o.w.set(l.hs, r), (0, s.r)(() => e({ notificationDismissedInGuilds: r })));
    },
}));
function d(e) {
    let [t, n] = (0, i.n)(u, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], r.x);
    return [!t.has(e), n];
}
function f(e) {
    return u.getState().resetNotification(e);
}

r.d(n, {
    i: function () {
        return p;
    },
    l: function () {
        return h;
    }
});
var i = r(47120);
var a = r(232713),
    o = r(65400),
    s = r(5907),
    l = r(731965),
    u = r(433517),
    c = r(590433);
function d() {
    var e;
    return new Set(null !== (e = u.K.get(c.hL)) && void 0 !== e ? e : []);
}
let f = (0, s.M)((e, n) => ({
    notificationDismissedInGuilds: d(),
    dismissNotification: (r) => {
        let i = n().notificationDismissedInGuilds;
        i.add(r), u.K.set(c.hL, i), (0, l.j)(() => e({ notificationDismissedInGuilds: i }));
    },
    resetNotification: (r) => {
        let i = n().notificationDismissedInGuilds;
        i.has(r) && (i.delete(r), u.K.set(c.hL, i), (0, l.j)(() => e({ notificationDismissedInGuilds: i })));
    }
}));
function p(e) {
    let [n, r] = (0, o.s)(f, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], a.X);
    return [!n.has(e), r];
}
function h(e) {
    return f.getState().resetNotification(e);
}

"use strict";
n.d(t, { G: () => _, n: () => d });
var r = n(942381),
    i = n(265690),
    a = n(870844),
    s = n(121894),
    o = n(506774),
    l = n(200700);
function u() {
    return new Set(o.w.get(l.hs) ?? []);
}
let c = (0, a.y)((e, t) => ({
    notificationDismissedInGuilds: u(),
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
    let [t, n] = (0, i.n)(c, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], r.x);
    return [!t.has(e), n];
}
function _(e) {
    return c.getState().resetNotification(e);
}

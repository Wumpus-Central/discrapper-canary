"use strict";
n.d(t, { G: () => u, n: () => c });
var i = n(462180),
    r = n(882035),
    a = n(976245),
    s = n(121894),
    l = n(506774),
    o = n(200700);
let d = (0, a.y)((e, t) => ({
    notificationDismissedInGuilds: new Set(l.w.get(o.hs) ?? []),
    dismissNotification: (n) => {
        let i = t().notificationDismissedInGuilds;
        i.add(n), l.w.set(o.hs, i), (0, s.r)(() => e({ notificationDismissedInGuilds: i }));
    },
    resetNotification: (n) => {
        let i = t().notificationDismissedInGuilds;
        i.has(n) && (i.delete(n), l.w.set(o.hs, i), (0, s.r)(() => e({ notificationDismissedInGuilds: i })));
    },
}));
function c(e) {
    let [t, n] = (0, r.n)(d, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], i.x);
    return [!t.has(e), n];
}
function u(e) {
    return d.getState().resetNotification(e);
}

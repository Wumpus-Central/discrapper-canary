"use strict";
n.d(t, { G: () => c, n: () => d });
var r = n(942381),
    i = n(265690),
    s = n(870844),
    a = n(121894),
    o = n(506774),
    l = n(200700);
let u = (0, s.y)((e, t) => ({
    notificationDismissedInGuilds: new Set(o.w.get(l.hs) ?? []),
    dismissNotification: (n) => {
        let r = t().notificationDismissedInGuilds;
        r.add(n), o.w.set(l.hs, r), (0, a.r)(() => e({ notificationDismissedInGuilds: r }));
    },
    resetNotification: (n) => {
        let r = t().notificationDismissedInGuilds;
        r.has(n) && (r.delete(n), o.w.set(l.hs, r), (0, a.r)(() => e({ notificationDismissedInGuilds: r })));
    },
}));
function d(e) {
    let [t, n] = (0, i.n)(u, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], r.x);
    return [!t.has(e), n];
}
function c(e) {
    return u.getState().resetNotification(e);
}

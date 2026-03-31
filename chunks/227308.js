"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(735438),
    o = n(311907),
    d = n(888288),
    c = n(256415),
    u = n(941023),
    h = n(714983),
    p = n(592598),
    f = n(672396),
    _ = n(652215),
    A = n(84616);
function g(e) {
    let { locked: t, keybind: n } = e,
        a = s.useRef(null),
        h = (0, o.yK)([d.A], () => d.A.getNotifications()),
        g = (0, o.bG)([c.default], () => c.default.getNotificationPositionMode());
    if ((0, o.bG)([p.A], () => p.A.isNotificationDisabled(f.KS.TextChat)) || g === _.G6Q.DISABLED) return null;
    let x = h.filter((e) => !t || e.status !== _.yFH.TIMED_OUT),
        E = (0, r.groupBy)(x, (e) => e.type);
    return (0, i.jsx)(u.A, {
        contentDomRef: a,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: a,
            className: l()(A.container, A[g]),
            children: Object.entries(E).map((e) => {
                let [s, a] = e;
                return 0 === a.length
                    ? null
                    : (0, i.jsx)(m, { locked: t, keybind: n, position: g, notification: a[0] }, s);
            }),
        }),
    });
}
function m(e) {
    let { notification: t, position: n, keybind: s, locked: a } = e;
    return (0, i.jsx)("div", {
        className: A.notificationGroup,
        children: (0, i.jsx)(h.A, { zIndex: 100, position: n, notification: t, keybind: s, locked: a }, t.id),
    });
}

"use strict";
i.d(t, { A: () => g });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(735438),
    o = i(311907),
    d = i(888288),
    c = i(256415),
    u = i(941023),
    h = i(714983),
    _ = i(592598),
    p = i(672396),
    f = i(652215),
    m = i(975455);
function g(e) {
    let { locked: t, keybind: i } = e,
        a = s.useRef(null),
        h = (0, o.yK)([d.A], () => d.A.getNotifications()),
        g = (0, o.bG)([c.default], () => c.default.getNotificationPositionMode());
    if ((0, o.bG)([_.A], () => _.A.isNotificationDisabled(p.KS.TextChat)) || g === f.G6Q.DISABLED) return null;
    let x = h.filter((e) => !t || e.status !== f.yFH.TIMED_OUT),
        v = (0, r.groupBy)(x, (e) => e.type);
    return (0, n.jsx)(u.A, {
        contentDomRef: a,
        observeInterval: 200,
        children: (0, n.jsx)("div", {
            ref: a,
            className: l()(m.container, m[g]),
            children: Object.entries(v).map((e) => {
                let [s, a] = e;
                return 0 === a.length
                    ? null
                    : (0, n.jsx)(A, { locked: t, keybind: i, position: g, notification: a[0] }, s);
            }),
        }),
    });
}
function A(e) {
    let { notification: t, position: i, keybind: s, locked: a } = e;
    return (0, n.jsx)("div", {
        className: m.notificationGroup,
        children: (0, n.jsx)(h.A, { zIndex: 100, position: i, notification: t, keybind: s, locked: a }, t.id),
    });
}

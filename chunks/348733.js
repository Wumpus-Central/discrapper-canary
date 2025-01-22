n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    o = n(392711),
    a = n(442837),
    l = n(261435),
    c = n(237997),
    d = n(692546),
    u = n(438015),
    h = n(981631),
    p = n(544690);
function f(e) {
    let { locked: t, keybind: n } = e,
        s = (0, a.Wu)([l.Z], () => l.Z.getNotifications()),
        u = (0, a.e7)([c.Z], () => c.Z.getNotificationPositionMode());
    if (u === h._vf.DISABLED) return null;
    let f = s.filter((e) => !t || e.status !== h._1z.TIMED_OUT),
        m = (0, o.groupBy)(f, (e) => e.type);
    return (0, i.jsx)(d.Z, {
        observeInterval: 200,
        children: (0, i.jsx)('div', {
            className: r()(p.container, p[u]),
            children: Object.entries(m).map((e) => {
                let [s, r] = e;
                return 0 === r.length
                    ? null
                    : (0, i.jsx)(
                          g,
                          {
                              locked: t,
                              keybind: n,
                              position: u,
                              notification: r[0]
                          },
                          s
                      );
            })
        })
    });
}
function g(e) {
    let { notification: t, position: n, keybind: s, locked: r } = e;
    return (0, i.jsx)('div', {
        className: p.notificationGroup,
        children: (0, i.jsx)(
            u.Z,
            {
                zIndex: 100,
                position: n,
                notification: t,
                keybind: s,
                locked: r
            },
            t.id
        )
    });
}

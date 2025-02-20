n.d(t, { Z: () => g }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    o = n(392711),
    l = n(442837),
    a = n(261435),
    c = n(237997),
    d = n(692546),
    u = n(438015),
    h = n(981631),
    p = n(514386);
function g(e) {
    let { locked: t, keybind: n } = e,
        r = (0, l.Wu)([a.Z], () => a.Z.getNotifications()),
        u = (0, l.e7)([c.Z], () => c.Z.getNotificationPositionMode());
    if (u === h._vf.DISABLED) return null;
    let g = r.filter((e) => !t || e.status !== h._1z.TIMED_OUT),
        m = (0, o.groupBy)(g, (e) => e.type);
    return (0, i.jsx)(d.Z, {
        observeInterval: 200,
        children: (0, i.jsx)('div', {
            className: s()(p.container, p[u]),
            children: Object.entries(m).map((e) => {
                let [r, s] = e;
                return 0 === s.length
                    ? null
                    : (0, i.jsx)(
                          f,
                          {
                              locked: t,
                              keybind: n,
                              position: u,
                              notification: s[0]
                          },
                          r
                      );
            })
        })
    });
}
function f(e) {
    let { notification: t, position: n, keybind: r, locked: s } = e;
    return (0, i.jsx)('div', {
        className: p.notificationGroup,
        children: (0, i.jsx)(
            u.Z,
            {
                zIndex: 100,
                position: n,
                notification: t,
                keybind: r,
                locked: s
            },
            t.id
        )
    });
}

n.d(t, { Z: () => g }), n(47120);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n(442837),
    r = n(261435),
    d = n(237997),
    c = n(692546),
    u = n(438015),
    h = n(981631),
    p = n(855134);
function g(e) {
    let { locked: t, keybind: n } = e,
        s = (0, o.Wu)([r.Z], () => r.Z.getNotifications()),
        u = (0, o.e7)([d.Z], () => d.Z.getNotificationPositionMode());
    if (u === h._vf.DISABLED) return null;
    let g = s.filter((e) => !t || e.status !== h._1z.TIMED_OUT),
        f = (0, a.groupBy)(g, (e) => e.type);
    return (0, i.jsx)(c.Z, {
        observeInterval: 200,
        children: (0, i.jsx)('div', {
            className: l()(p.container, p[u]),
            children: Object.entries(f).map((e) => {
                let [s, l] = e;
                return 0 === l.length
                    ? null
                    : (0, i.jsx)(
                          m,
                          {
                              locked: t,
                              keybind: n,
                              position: u,
                              notification: l[0]
                          },
                          s
                      );
            })
        })
    });
}
function m(e) {
    let { notification: t, position: n, keybind: s, locked: l } = e;
    return (0, i.jsx)('div', {
        className: p.notificationGroup,
        children: (0, i.jsx)(
            u.Z,
            {
                zIndex: 100,
                position: n,
                notification: t,
                keybind: s,
                locked: l
            },
            t.id
        )
    });
}

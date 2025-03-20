n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(392711),
    l = n(442837),
    c = n(261435),
    d = n(237997),
    u = n(692546),
    h = n(438015),
    p = n(981631),
    f = n(870181);
function g(e) {
    let { locked: t, keybind: n } = e,
        s = r.useRef(null),
        h = (0, l.Wu)([c.Z], () => c.Z.getNotifications()),
        g = (0, l.e7)([d.default], () => d.default.getNotificationPositionMode());
    if (g === p._vf.DISABLED) return null;
    let y = h.filter((e) => !t || e.status !== p._1z.TIMED_OUT),
        _ = (0, a.groupBy)(y, (e) => e.type);
    return (0, i.jsx)(u.Z, {
        contentDomRef: s,
        observeInterval: 200,
        children: (0, i.jsx)('div', {
            ref: s,
            className: o()(f.container, f[g]),
            children: Object.entries(_).map((e) => {
                let [r, s] = e;
                return 0 === s.length
                    ? null
                    : (0, i.jsx)(
                          m,
                          {
                              locked: t,
                              keybind: n,
                              position: g,
                              notification: s[0]
                          },
                          r
                      );
            })
        })
    });
}
function m(e) {
    let { notification: t, position: n, keybind: r, locked: s } = e;
    return (0, i.jsx)('div', {
        className: f.notificationGroup,
        children: (0, i.jsx)(
            h.Z,
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

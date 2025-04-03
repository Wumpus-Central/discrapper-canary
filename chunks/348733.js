n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    a = n(442837),
    c = n(261435),
    u = n(237997),
    d = n(486016),
    h = n(692546),
    p = n(438015),
    f = n(624864),
    g = n(981631),
    m = n(993798);
function y(e) {
    let { locked: t, keybind: n } = e,
        s = r.useRef(null),
        p = (0, a.Wu)([c.Z], () => c.Z.getNotifications()),
        y = (0, a.e7)([u.default], () => u.default.getNotificationPositionMode());
    if ((0, a.e7)([f.Z], () => f.Z.isNotificationDisabled(d.OverlayNotificationDisabledSetting.TEXT_CHAT)) || y === g._vf.DISABLED) return null;
    let v = p.filter((e) => !t || e.status !== g._1z.TIMED_OUT),
        x = (0, l.groupBy)(v, (e) => e.type);
    return (0, i.jsx)(h.Z, {
        contentDomRef: s,
        observeInterval: 200,
        children: (0, i.jsx)('div', {
            ref: s,
            className: o()(m.container, m[y]),
            children: Object.entries(x).map((e) => {
                let [r, s] = e;
                return 0 === s.length
                    ? null
                    : (0, i.jsx)(
                          O,
                          {
                              locked: t,
                              keybind: n,
                              position: y,
                              notification: s[0]
                          },
                          r
                      );
            })
        })
    });
}
function O(e) {
    let { notification: t, position: n, keybind: r, locked: s } = e;
    return (0, i.jsx)('div', {
        className: m.notificationGroup,
        children: (0, i.jsx)(
            p.Z,
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

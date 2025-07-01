(n.d(t, { Z: () => y }), n(388685));
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    a = n(442837),
    c = n(261435),
    d = n(237997),
    u = n(486016),
    h = n(692546),
    p = n(438015),
    f = n(624864),
    g = n(981631),
    m = n(993798);
function y(e) {
    let { locked: t, keybind: n } = e,
        o = r.useRef(null),
        p = (0, a.Wu)([c.Z], () => c.Z.getNotifications()),
        y = (0, a.e7)([d.default], () => d.default.getNotificationPositionMode());
    if ((0, a.e7)([f.Z], () => f.Z.isNotificationDisabled(u.OverlayNotificationDisabledSetting.TEXT_CHAT)) || y === g._vf.DISABLED) return null;
    let v = p.filter((e) => !t || e.status !== g._1z.TIMED_OUT),
        _ = (0, s.groupBy)(v, (e) => e.type);
    return (0, i.jsx)(h.Z, {
        contentDomRef: o,
        observeInterval: 200,
        children: (0, i.jsx)('div', {
            ref: o,
            className: l()(m.container, m[y]),
            children: Object.entries(_).map((e) => {
                let [r, o] = e;
                return 0 === o.length
                    ? null
                    : (0, i.jsx)(
                          O,
                          {
                              locked: t,
                              keybind: n,
                              position: y,
                              notification: o[0]
                          },
                          r
                      );
            })
        })
    });
}
function O(e) {
    let { notification: t, position: n, keybind: r, locked: o } = e;
    return (0, i.jsx)('div', {
        className: m.notificationGroup,
        children: (0, i.jsx)(
            p.Z,
            {
                zIndex: 100,
                position: n,
                notification: t,
                keybind: r,
                locked: o
            },
            t.id
        )
    });
}

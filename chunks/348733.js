n.d(t, { Z: () => y }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    a = n(442837),
    c = n(261435),
    d = n(237997),
    u = n(692546),
    p = n(438015),
    h = n(624864),
    f = n(987650),
    g = n(981631),
    m = n(991168);
function y(e) {
    let { locked: t, keybind: n } = e,
        s = r.useRef(null),
        p = (0, a.Wu)([c.Z], () => c.Z.getNotifications()),
        y = (0, a.e7)([d.default], () => d.default.getNotificationPositionMode());
    if ((0, a.e7)([h.Z], () => h.Z.isNotificationDisabled(f.n0.TextChat)) || y === g._vf.DISABLED) return null;
    let O = p.filter((e) => !t || e.status !== g._1z.TIMED_OUT),
        b = (0, l.groupBy)(O, (e) => e.type);
    return (0, i.jsx)(u.Z, {
        contentDomRef: s,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: s,
            className: o()(m.container, m[y]),
            children: Object.entries(b).map((e) => {
                let [r, s] = e;
                return 0 === s.length
                    ? null
                    : (0, i.jsx)(
                          _,
                          {
                              locked: t,
                              keybind: n,
                              position: y,
                              notification: s[0],
                          },
                          r,
                      );
            }),
        }),
    });
}
function _(e) {
    let { notification: t, position: n, keybind: r, locked: s } = e;
    return (0, i.jsx)("div", {
        className: m.notificationGroup,
        children: (0, i.jsx)(
            p.Z,
            {
                zIndex: 100,
                position: n,
                notification: t,
                keybind: r,
                locked: s,
            },
            t.id,
        ),
    });
}

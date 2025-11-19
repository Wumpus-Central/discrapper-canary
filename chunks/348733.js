n.d(t, { Z: () => y }), n(388685);
var i = n(54381),
    r = n(473749),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    a = n(442837),
    c = n(261435),
    d = n(237997),
    u = n(692546),
    h = n(438015),
    p = n(624864),
    f = n(987650),
    g = n(981631),
    m = n(745466);
function y(e) {
    let { locked: t, keybind: n } = e,
        o = r.useRef(null),
        h = (0, a.Wu)([c.Z], () => c.Z.getNotifications()),
        y = (0, a.e7)([d.default], () => d.default.getNotificationPositionMode());
    if ((0, a.e7)([p.Z], () => p.Z.isNotificationDisabled(f.n0.TextChat)) || y === g._vf.DISABLED) return null;
    let _ = h.filter((e) => !t || e.status !== g._1z.TIMED_OUT),
        v = (0, s.groupBy)(_, (e) => e.type);
    return (0, i.jsx)(u.Z, {
        contentDomRef: o,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: o,
            className: l()(m.container, m[y]),
            children: Object.entries(v).map((e) => {
                let [r, o] = e;
                return 0 === o.length
                    ? null
                    : (0, i.jsx)(
                          b,
                          {
                              locked: t,
                              keybind: n,
                              position: y,
                              notification: o[0],
                          },
                          r,
                      );
            }),
        }),
    });
}
function b(e) {
    let { notification: t, position: n, keybind: r, locked: o } = e;
    return (0, i.jsx)("div", {
        className: m.notificationGroup,
        children: (0, i.jsx)(
            h.Z,
            {
                zIndex: 100,
                position: n,
                notification: t,
                keybind: r,
                locked: o,
            },
            t.id,
        ),
    });
}

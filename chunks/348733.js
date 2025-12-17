n.d(t, { Z: () => m }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n(442837),
    c = n(261435),
    d = n(237997),
    u = n(692546),
    f = n(438015),
    h = n(624864),
    p = n(987650),
    g = n(981631),
    b = n(332111);
function m(e) {
    let { locked: t, keybind: n } = e,
        a = r.useRef(null),
        f = (0, l.Wu)([c.Z], () => c.Z.getNotifications()),
        m = (0, l.e7)([d.default], () => d.default.getNotificationPositionMode());
    if ((0, l.e7)([h.Z], () => h.Z.isNotificationDisabled(p.n0.TextChat)) || m === g._vf.DISABLED) return null;
    let v = f.filter((e) => !t || e.status !== g._1z.TIMED_OUT),
        O = (0, o.groupBy)(v, (e) => e.type);
    return (0, i.jsx)(u.Z, {
        contentDomRef: a,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: a,
            className: s()(b.container, b[m]),
            children: Object.entries(O).map((e) => {
                let [r, a] = e;
                return 0 === a.length
                    ? null
                    : (0, i.jsx)(
                          y,
                          {
                              locked: t,
                              keybind: n,
                              position: m,
                              notification: a[0],
                          },
                          r,
                      );
            }),
        }),
    });
}
function y(e) {
    let { notification: t, position: n, keybind: r, locked: a } = e;
    return (0, i.jsx)("div", {
        className: b.notificationGroup,
        children: (0, i.jsx)(
            f.Z,
            {
                zIndex: 100,
                position: n,
                notification: t,
                keybind: r,
                locked: a,
            },
            t.id,
        ),
    });
}

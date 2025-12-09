n.d(t, { Z: () => _ }), n(388685);
var i = n(54381),
    r = n(473749),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    a = n(442837),
    c = n(261435),
    d = n(237997),
    u = n(692546),
    h = n(438015),
    p = n(624864),
    f = n(987650),
    g = n(981631),
    m = n(991168);
function _(e) {
    let { locked: t, keybind: n } = e,
        s = r.useRef(null),
        h = (0, a.Wu)([c.Z], () => c.Z.getNotifications()),
        _ = (0, a.e7)([d.default], () => d.default.getNotificationPositionMode());
    if ((0, a.e7)([p.Z], () => p.Z.isNotificationDisabled(f.n0.TextChat)) || _ === g._vf.DISABLED) return null;
    let v = h.filter((e) => !t || e.status !== g._1z.TIMED_OUT),
        b = (0, l.groupBy)(v, (e) => e.type);
    return (0, i.jsx)(u.Z, {
        contentDomRef: s,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: s,
            className: o()(m.container, m[_]),
            children: Object.entries(b).map((e) => {
                let [r, s] = e;
                return 0 === s.length
                    ? null
                    : (0, i.jsx)(
                          y,
                          {
                              locked: t,
                              keybind: n,
                              position: _,
                              notification: s[0],
                          },
                          r,
                      );
            }),
        }),
    });
}
function y(e) {
    let { notification: t, position: n, keybind: r, locked: s } = e;
    return (0, i.jsx)("div", {
        className: m.notificationGroup,
        children: (0, i.jsx)(
            h.Z,
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

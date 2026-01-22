n.d(t, { A: () => y }), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(735438),
    a = n(311907),
    c = n(888288),
    d = n(256415),
    u = n(941023),
    h = n(714983),
    p = n(592598),
    f = n(672396),
    b = n(652215),
    g = n(283446);
function y(e) {
    let { locked: t, keybind: n } = e,
        s = r.useRef(null),
        h = (0, a.yK)([c.A], () => c.A.getNotifications()),
        y = (0, a.bG)([d.default], () => d.default.getNotificationPositionMode());
    if ((0, a.bG)([p.A], () => p.A.isNotificationDisabled(f.KS.TextChat)) || y === b.G6Q.DISABLED) return null;
    let m = h.filter((e) => !t || e.status !== b.yFH.TIMED_OUT),
        O = (0, o.groupBy)(m, (e) => e.type);
    return (0, i.jsx)(u.A, {
        contentDomRef: s,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: s,
            className: l()(g.container, g[y]),
            children: Object.entries(O).map((e) => {
                let [r, s] = e;
                return 0 === s.length
                    ? null
                    : (0, i.jsx)(
                          A,
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
function A(e) {
    let { notification: t, position: n, keybind: r, locked: s } = e;
    return (0, i.jsx)("div", {
        className: g.notificationGroup,
        children: (0, i.jsx)(
            h.A,
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

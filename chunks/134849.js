n.d(t, { Z: () => E }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(237997),
    s = n(804570),
    c = n(388627),
    u = n(561064),
    d = n(380736),
    p = n(693091),
    f = n(371467),
    h = n(981631),
    g = n(388032),
    _ = n(734377);
let m = [];
function v(e) {
    return e.notification.id;
}
function O(e, t, n, r) {
    let { index: o, notification: l, locked: a } = t;
    return (0, i.jsx)(
        d.ZP,
        {
            index: o,
            notification: l,
            locked: a,
            transitionState: n,
            cleanUp: r
        },
        e
    );
}
function b(e) {
    return (0, i.jsx)('div', {
        className: _.container,
        children: e
    });
}
let y = (e) => r.useState(() => new p.AS(e))[0],
    E = r.memo(function (e) {
        let { locked: t } = e,
            n = (0, o.e7)(
                [a.Z, f.Z],
                () => {
                    if (a.Z.getNotificationPositionMode() === h._vf.DISABLED) return m;
                    let e = [],
                        n = 0;
                    for (let i of f.Z.getNotifications()) {
                        if (n > 4) break;
                        (!t || i.status !== h._1z.TIMED_OUT) &&
                            (e.push({
                                index: n,
                                locked: t,
                                notification: i
                            }),
                            n++);
                    }
                    return e;
                },
                [t],
                c.E6
            ),
            d = y(t);
        return (r.useLayoutEffect(() => d.updateState(n, t)), r.useLayoutEffect(() => (d.initialize((0, u.i)()), () => d.cleanUp()), [d]), 0 !== n.length || t)
            ? (0, i.jsx)(p.S4.Provider, {
                  value: d,
                  children: (0, i.jsx)(l.W3x, {
                      items: n,
                      renderItem: O,
                      getItemKey: v,
                      wrapChildren: b
                  })
              })
            : t
              ? null
              : (0, i.jsx)(s.E, {
                    emptyText: g.NW.string(g.t.O1Nbjo),
                    icon: l.Dkj,
                    absolute: !0
                });
    });

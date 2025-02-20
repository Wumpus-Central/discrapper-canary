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
        let { locked: t, showEmpty: n = !0 } = e,
            d = (0, o.e7)(
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
            _ = y(t);
        return (r.useLayoutEffect(() => _.updateState(d, t)), r.useLayoutEffect(() => (_.initialize((0, u.i)()), () => _.cleanUp()), [_]), 0 !== d.length || t)
            ? (0, i.jsx)(p.S4.Provider, {
                  value: _,
                  children: (0, i.jsx)(l.W3x, {
                      items: d,
                      renderItem: O,
                      getItemKey: v,
                      wrapChildren: b
                  })
              })
            : n
              ? t
                  ? null
                  : (0, i.jsx)(s.E, {
                        emptyText: g.NW.string(g.t.O1Nbjo),
                        icon: l.Dkj,
                        absolute: !0
                    })
              : null;
    });

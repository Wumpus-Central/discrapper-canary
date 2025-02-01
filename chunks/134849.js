n.d(t, { Z: () => Z }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(237997),
    s = n(804570),
    c = n(388627),
    d = n(561064),
    u = n(380736),
    h = n(693091),
    _ = n(371467),
    m = n(981631),
    g = n(388032),
    p = n(109020);
let f = [];
function x(e) {
    return e.notification.id;
}
function v(e, t, n, r) {
    let { index: o, notification: a, locked: l } = t;
    return (0, i.jsx)(
        u.ZP,
        {
            index: o,
            notification: a,
            locked: l,
            transitionState: n,
            cleanUp: r
        },
        e
    );
}
function C(e) {
    return (0, i.jsx)('div', {
        className: p.container,
        children: e
    });
}
let b = (e) => r.useState(() => new h.AS(e))[0],
    Z = r.memo(function (e) {
        let { locked: t } = e,
            n = (0, o.e7)(
                [l.Z, _.Z],
                () => {
                    if (l.Z.getNotificationPositionMode() === m._vf.DISABLED) return f;
                    let e = [],
                        n = 0;
                    for (let i of _.Z.getNotifications()) {
                        if (n > 4) break;
                        (!t || i.status !== m._1z.TIMED_OUT) &&
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
            u = b(t);
        return (r.useLayoutEffect(() => u.updateState(n, t)), r.useLayoutEffect(() => (u.initialize((0, d.i)()), () => u.cleanUp()), [u]), 0 !== n.length || t)
            ? (0, i.jsx)(h.S4.Provider, {
                  value: u,
                  children: (0, i.jsx)(a.W3x, {
                      items: n,
                      renderItem: v,
                      getItemKey: x,
                      wrapChildren: C
                  })
              })
            : t
              ? null
              : (0, i.jsx)(s.E, {
                    emptyText: g.intl.string(g.t.O1Nbjo),
                    icon: a.Dkj,
                    absolute: !0
                });
    });

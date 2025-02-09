n.d(t, { Z: () => Z }), n(653041), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(237997),
    s = n(804570),
    d = n(388627),
    c = n(561064),
    u = n(380736),
    h = n(693091),
    _ = n(371467),
    p = n(981631),
    f = n(388032),
    g = n(218576);
let m = [];
function v(e) {
    return e.notification.id;
}
function x(e, t, n, o) {
    let { index: r, notification: l, locked: a } = t;
    return (0, i.jsx)(
        u.ZP,
        {
            index: r,
            notification: l,
            locked: a,
            transitionState: n,
            cleanUp: o
        },
        e
    );
}
function E(e) {
    return (0, i.jsx)('div', {
        className: g.container,
        children: e
    });
}
let C = (e) => o.useState(() => new h.AS(e))[0],
    Z = o.memo(function (e) {
        let { locked: t } = e,
            n = (0, r.e7)(
                [a.Z, _.Z],
                () => {
                    if (a.Z.getNotificationPositionMode() === p._vf.DISABLED) return m;
                    let e = [],
                        n = 0;
                    for (let i of _.Z.getNotifications()) {
                        if (n > 4) break;
                        (!t || i.status !== p._1z.TIMED_OUT) &&
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
                d.E6
            ),
            u = C(t);
        return (o.useLayoutEffect(() => u.updateState(n, t)), o.useLayoutEffect(() => (u.initialize((0, c.i)()), () => u.cleanUp()), [u]), 0 !== n.length || t)
            ? (0, i.jsx)(h.S4.Provider, {
                  value: u,
                  children: (0, i.jsx)(l.W3x, {
                      items: n,
                      renderItem: x,
                      getItemKey: v,
                      wrapChildren: E
                  })
              })
            : t
              ? null
              : (0, i.jsx)(s.E, {
                    emptyText: f.intl.string(f.t.O1Nbjo),
                    icon: l.Dkj,
                    absolute: !0
                });
    });

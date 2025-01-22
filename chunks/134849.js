n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(237997),
    s = n(804570),
    c = n(388627),
    d = n(561064),
    u = n(380736),
    h = n(693091),
    m = n(371467),
    p = n(981631),
    x = n(388032),
    f = n(109020);
let v = [];
function g(e) {
    return e.notification.id;
}
function C(e, t, n, r) {
    let { index: o, notification: l, locked: a } = t;
    return (0, i.jsx)(
        u.Z,
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
function Z(e) {
    return (0, i.jsx)('div', {
        className: f.container,
        children: e
    });
}
let _ = (e) => r.useState(() => new h.AS(e))[0];
t.Z = r.memo(function (e) {
    let { locked: t } = e,
        n = (0, o.e7)(
            [a.Z, m.Z],
            () => {
                if (a.Z.getNotificationPositionMode() === p._vf.DISABLED) return v;
                let e = [],
                    n = 0;
                for (let i of m.Z.getNotifications()) {
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
            c.E6
        ),
        u = _(t);
    return (r.useLayoutEffect(() => u.updateState(n, t)), r.useLayoutEffect(() => (u.initialize((0, d.i)()), () => u.cleanUp()), [u]), 0 !== n.length || t)
        ? (0, i.jsx)(h.S4.Provider, {
              value: u,
              children: (0, i.jsx)(l.TransitionGroup, {
                  items: n,
                  renderItem: C,
                  getItemKey: g,
                  wrapChildren: Z
              })
          })
        : t
          ? null
          : (0, i.jsx)(s.E, {
                emptyText: x.intl.string(x.t.O1Nbjo),
                icon: l.BellIcon,
                absolute: !0
            });
});

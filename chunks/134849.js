n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(481060),
    a = n(237997),
    s = n(804570),
    c = n(388627),
    u = n(561064),
    d = n(380736),
    h = n(693091),
    f = n(371467),
    p = n(981631),
    m = n(388032),
    v = n(839588);
let x = [];
function g(e) {
    return e.notification.id;
}
function C(e, t, n, l) {
    let { index: o, notification: r, locked: a } = t;
    return (0, i.jsx)(
        d.Z,
        {
            index: o,
            notification: r,
            locked: a,
            transitionState: n,
            cleanUp: l
        },
        e
    );
}
function Z(e) {
    return (0, i.jsx)('div', {
        className: v.container,
        children: e
    });
}
let _ = (e) => l.useState(() => new h.AS(e))[0];
t.Z = l.memo(function (e) {
    let { locked: t } = e,
        n = (0, o.e7)(
            [a.Z, f.Z],
            () => {
                if (a.Z.getNotificationPositionMode() === p._vf.DISABLED) return x;
                let e = [],
                    n = 0;
                for (let i of f.Z.getNotifications()) {
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
        d = _(t);
    return (l.useLayoutEffect(() => d.updateState(n, t)), l.useLayoutEffect(() => (d.initialize((0, u.i)()), () => d.cleanUp()), [d]), 0 !== n.length || t)
        ? (0, i.jsx)(h.S4.Provider, {
              value: d,
              children: (0, i.jsx)(r.TransitionGroup, {
                  items: n,
                  renderItem: C,
                  getItemKey: g,
                  wrapChildren: Z
              })
          })
        : t
          ? null
          : (0, i.jsx)(s.E, {
                emptyText: m.intl.string(m.t.O1Nbjo),
                icon: r.BellIcon,
                absolute: !0
            });
});

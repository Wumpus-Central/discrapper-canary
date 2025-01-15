n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(237997),
    s = n(388627),
    c = n(561064),
    u = n(380736),
    d = n(693091),
    h = n(371467),
    f = n(981631),
    p = n(839588);
let m = [];
function v(e) {
    return e.notification.id;
}
function g(e, t, n, l) {
    let { index: r, notification: o, locked: a } = t;
    return (0, i.jsx)(
        u.Z,
        {
            index: r,
            notification: o,
            locked: a,
            transitionState: n,
            cleanUp: l
        },
        e
    );
}
function x(e) {
    return (0, i.jsx)('div', {
        className: p.container,
        children: e
    });
}
let C = (e) => l.useState(() => new d.AS(e))[0];
t.Z = l.memo(function (e) {
    let { locked: t } = e,
        n = (0, r.e7)(
            [a.Z, h.Z],
            () => {
                if (a.Z.getNotificationPositionMode() === f._vf.DISABLED) return m;
                let e = [],
                    n = 0;
                for (let i of h.Z.getNotifications()) {
                    if (n > 4) break;
                    (!t || i.status !== f._1z.TIMED_OUT) &&
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
            s.E6
        ),
        u = C(t);
    return (
        l.useLayoutEffect(() => u.updateState(n, t)),
        l.useLayoutEffect(() => (u.initialize((0, c.i)()), () => u.cleanUp()), [u]),
        (0, i.jsx)(d.S4.Provider, {
            value: u,
            children: (0, i.jsx)(o.TransitionGroup, {
                items: n,
                renderItem: g,
                getItemKey: v,
                wrapChildren: x
            })
        })
    );
});

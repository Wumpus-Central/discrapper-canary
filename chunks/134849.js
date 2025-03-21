n.d(t, { Z: () => x }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(486016),
    s = n(804570),
    c = n(624864),
    u = n(388627),
    d = n(561064),
    p = n(380736),
    h = n(693091),
    f = n(371467),
    m = n(981631),
    g = n(388032),
    O = n(173293);
let v = [];
function y(e) {
    return e.notification.id;
}
function E(e, t, n, r) {
    let { index: l, notification: o, locked: a } = t;
    return (0, i.jsx)(
        p.Z,
        {
            index: l,
            notification: o,
            locked: a,
            transitionState: n,
            cleanUp: r
        },
        e
    );
}
function b(e) {
    return (0, i.jsx)('div', {
        className: O.container,
        children: e
    });
}
let j = (e) => r.useState(() => new h.AS(e))[0],
    x = r.memo(function (e) {
        let { locked: t, showEmpty: n = !0 } = e,
            p = (0, l.e7)(
                [f.Z, c.Z],
                () => {
                    if (c.Z.isNotificationDisabled(a.OverlayNotificationDisabledSetting.TEXT_CHAT)) return v;
                    let e = [],
                        n = 0;
                    for (let i of f.Z.getNotifications()) {
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
                u.E6
            ),
            O = j(t);
        return (r.useLayoutEffect(() => O.updateState(p, t)), r.useLayoutEffect(() => (O.initialize((0, d.i)()), () => O.cleanUp()), [O]), 0 !== p.length || t)
            ? (0, i.jsx)(h.S4.Provider, {
                  value: O,
                  children: (0, i.jsx)(o.W3x, {
                      items: p,
                      renderItem: E,
                      getItemKey: y,
                      wrapChildren: b
                  })
              })
            : n
              ? t
                  ? null
                  : (0, i.jsx)(s.E, {
                        emptyText: g.NW.string(g.t.O1Nbjo),
                        icon: o.Dkj,
                        absolute: !0
                    })
              : null;
    });

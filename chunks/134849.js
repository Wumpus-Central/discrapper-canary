n.d(t, { Z: () => I }), n(539854), n(388685);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(486016),
    s = n(804570),
    c = n(624864),
    u = n(388627),
    d = n(561064),
    p = n(380736),
    f = n(693091),
    h = n(371467),
    m = n(981631),
    g = n(388032),
    y = n(76932);
let O = [];
function v(e) {
    return e.notification.id;
}
function b(e, t, n, r) {
    let { index: o, notification: l, locked: a } = t;
    return (0, i.jsx)(
        p.Z,
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
function E(e) {
    return (0, i.jsx)('div', {
        className: y.container,
        children: e
    });
}
let _ = (e) => r.useState(() => new f.AS(e))[0],
    I = r.memo(function (e) {
        let { locked: t, showEmpty: n = !0 } = e,
            p = (0, o.e7)(
                [h.Z, c.Z],
                () => {
                    if (c.Z.isNotificationDisabled(a.OverlayNotificationDisabledSetting.TEXT_CHAT)) return O;
                    let e = [],
                        n = 0;
                    for (let i of h.Z.getNotifications()) {
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
            y = _(t);
        return (r.useLayoutEffect(() => y.updateState(p, t)), r.useLayoutEffect(() => (y.initialize((0, d.i)()), () => y.cleanUp()), [y]), 0 !== p.length || t)
            ? (0, i.jsx)(f.S4.Provider, {
                  value: y,
                  children: (0, i.jsx)(l.W3x, {
                      items: p,
                      renderItem: b,
                      getItemKey: v,
                      wrapChildren: E
                  })
              })
            : n
              ? t
                  ? null
                  : (0, i.jsx)(s.E, {
                        emptyText: g.intl.string(g.t.O1Nbjo),
                        icon: l.Dkj,
                        absolute: !0
                    })
              : null;
    });

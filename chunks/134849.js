n.d(t, { Z: () => x }), n(539854), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(442837),
    l = n(481060),
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
    y = n(76932);
let O = [];
function v(e) {
    return e.notification.id;
}
function b(e, t, n, r) {
    let { index: o, notification: l, locked: a, pinned: s } = t;
    return (0, i.jsx)(
        p.Z,
        {
            index: o,
            notification: l,
            locked: a,
            pinned: s,
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
let _ = (e) => r.useState(() => new h.AS(e))[0],
    x = r.memo(function (e) {
        let { locked: t, pinned: n, showEmpty: p = !0 } = e,
            y = (0, o.e7)(
                [f.Z, c.Z],
                () => {
                    if (c.Z.isNotificationDisabled(a.OverlayNotificationDisabledSetting.TEXT_CHAT)) return O;
                    let e = [],
                        i = 0;
                    for (let r of f.Z.getNotifications()) {
                        if (i > 4) break;
                        (!t || r.status !== m._1z.TIMED_OUT) &&
                            (e.push({
                                index: i,
                                locked: t,
                                pinned: n,
                                notification: r
                            }),
                            i++);
                    }
                    return e;
                },
                [t, n],
                u.E6
            ),
            x = _(t);
        return (r.useLayoutEffect(() => x.updateState(y, t)), r.useLayoutEffect(() => (x.initialize((0, d.i)()), () => x.cleanUp()), [x]), 0 !== y.length || t)
            ? (0, i.jsx)(h.S4.Provider, {
                  value: x,
                  children: (0, i.jsx)(l.W3x, {
                      items: y,
                      renderItem: b,
                      getItemKey: v,
                      wrapChildren: E
                  })
              })
            : p
              ? t
                  ? null
                  : (0, i.jsx)(s.E, {
                        emptyText: g.intl.string(g.t.O1Nbjo),
                        icon: l.Dkj,
                        absolute: !0
                    })
              : null;
    });

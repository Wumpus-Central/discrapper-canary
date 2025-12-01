n.d(t, { Z: () => b }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(804570),
    s = n(624864),
    u = n(388627),
    c = n(561064),
    d = n(380736),
    h = n(693091),
    p = n(371467),
    f = n(987650),
    m = n(981631),
    g = n(388032),
    y = n(63452);
let O = [];
function E(e) {
    return e.notification.id;
}
function v(e, t, n, r) {
    let { index: l, notification: a, locked: o, pinned: s } = t;
    return (0, i.jsx)(
        d.Z,
        {
            index: l,
            notification: a,
            locked: o,
            pinned: s,
            transitionState: n,
            cleanUp: r,
        },
        e,
    );
}
function S(e) {
    return (0, i.jsx)("div", {
        className: y.container,
        children: e,
    });
}
let b = r.memo(function (e) {
    let { locked: t, pinned: n, showEmpty: d = !0 } = e,
        y = (0, l.e7)(
            [p.Z, s.Z],
            () => {
                if (s.Z.isNotificationDisabled(f.n0.TextChat)) return O;
                let e = [],
                    i = 0;
                for (let r of p.Z.getNotifications()) {
                    if (i > 4) break;
                    (!t || r.status !== m._1z.TIMED_OUT) &&
                        (e.push({
                            index: i,
                            locked: t,
                            pinned: n,
                            notification: r,
                        }),
                        i++);
                }
                return e;
            },
            [t, n],
            u.E6,
        ),
        b = r.useState(() => new h.AS(t))[0];
    return (r.useLayoutEffect(() => b.updateState(y, t)),
    r.useLayoutEffect(() => (b.initialize((0, c.i)()), () => b.cleanUp()), [b]),
    0 !== y.length || t)
        ? (0, i.jsx)(h.S4.Provider, {
              value: b,
              children: (0, i.jsx)(a.W3x, {
                  items: y,
                  renderItem: v,
                  getItemKey: E,
                  wrapChildren: S,
              }),
          })
        : d
          ? t
              ? null
              : (0, i.jsx)(o.E, {
                    emptyText: g.intl.string(g.t.O1Nbjq),
                    icon: a.Dkj,
                    absolute: !0,
                })
          : null;
});

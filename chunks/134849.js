n.d(t, { Z: () => S }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(804570),
    s = n(624864),
    u = n(388627),
    c = n(561064),
    d = n(380736),
    h = n(693091),
    p = n(371467),
    f = n(987650),
    m = n(981631),
    g = n(388032),
    O = n(63452);
let y = [];
function E(e) {
    return e.notification.id;
}
function v(e, t, n, r) {
    let { index: l, notification: o, locked: a, pinned: s } = t;
    return (0, i.jsx)(
        d.Z,
        {
            index: l,
            notification: o,
            locked: a,
            pinned: s,
            transitionState: n,
            cleanUp: r,
        },
        e,
    );
}
function b(e) {
    return (0, i.jsx)("div", {
        className: O.container,
        children: e,
    });
}
let S = r.memo(function (e) {
    let { locked: t, pinned: n, showEmpty: d = !0 } = e,
        O = (0, l.e7)(
            [p.Z, s.Z],
            () => {
                if (s.Z.isNotificationDisabled(f.n0.TextChat)) return y;
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
        S = r.useState(() => new h.AS(t))[0];
    return (r.useLayoutEffect(() => S.updateState(O, t)),
    r.useLayoutEffect(() => (S.initialize((0, c.i)()), () => S.cleanUp()), [S]),
    0 !== O.length || t)
        ? (0, i.jsx)(h.S4.Provider, {
              value: S,
              children: (0, i.jsx)(o.W3x, {
                  items: O,
                  renderItem: v,
                  getItemKey: E,
                  wrapChildren: b,
              }),
          })
        : d
          ? t
              ? null
              : (0, i.jsx)(a.E, {
                    emptyText: g.intl.string(g.t.O1Nbjq),
                    icon: o.Dkj,
                    absolute: !0,
                })
          : null;
});

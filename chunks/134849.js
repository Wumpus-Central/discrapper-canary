n.d(t, { Z: () => S }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(442837),
    l = n(481060),
    o = n(804570),
    s = n(624864),
    c = n(388627),
    u = n(561064),
    d = n(380736),
    f = n(693091),
    h = n(371467),
    p = n(987650),
    m = n(981631),
    g = n(388032),
    b = n(782621);
let y = [];
function O(e) {
    return e.notification.id;
}
function v(e, t, n, r) {
    let { index: a, notification: l, locked: o, pinned: s } = t;
    return (0, i.jsx)(
        d.Z,
        {
            index: a,
            notification: l,
            locked: o,
            pinned: s,
            transitionState: n,
            cleanUp: r,
        },
        e,
    );
}
function E(e) {
    return (0, i.jsx)("div", {
        className: b.container,
        children: e,
    });
}
let S = r.memo(function (e) {
    let { locked: t, pinned: n, showEmpty: d = !0 } = e,
        b = (0, a.e7)(
            [h.Z, s.Z],
            () => {
                if (s.Z.isNotificationDisabled(p.n0.TextChat)) return y;
                let e = [],
                    i = 0;
                for (let r of h.Z.getNotifications()) {
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
            c.E6,
        ),
        S = r.useState(() => new f.AS(t))[0];
    return (r.useLayoutEffect(() => S.updateState(b, t)),
    r.useLayoutEffect(() => (S.initialize((0, u.i)()), () => S.cleanUp()), [S]),
    0 !== b.length || t)
        ? (0, i.jsx)(f.S4.Provider, {
              value: S,
              children: (0, i.jsx)(l.W3x, {
                  items: b,
                  renderItem: v,
                  getItemKey: O,
                  wrapChildren: E,
              }),
          })
        : d
          ? t
              ? null
              : (0, i.jsx)(o.E, {
                    emptyText: g.intl.string(g.t.O1Nbjq),
                    icon: l.Dkj,
                    absolute: !0,
                })
          : null;
});

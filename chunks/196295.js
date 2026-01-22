n.d(t, { A: () => b }), n(321073), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(412477),
    s = n(592598),
    c = n(243612),
    u = n(545807),
    d = n(672910),
    p = n(57019),
    h = n(703552),
    f = n(672396),
    m = n(652215),
    g = n(985018),
    y = n(288507);
let A = [];
function O(e) {
    return e.notification.id;
}
function E(e, t, n, r) {
    let { index: l, notification: a, locked: o, pinned: s } = t;
    return (0, i.jsx)(
        d.A,
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
function v(e) {
    return (0, i.jsx)("div", {
        className: y.k,
        children: e,
    });
}
let b = r.memo(function (e) {
    let { locked: t, pinned: n, showEmpty: d = !0 } = e,
        y = (0, l.bG)(
            [h.A, s.A],
            () => {
                if (s.A.isNotificationDisabled(f.KS.TextChat)) return A;
                let e = [],
                    i = 0;
                for (let r of h.A.getNotifications()) {
                    if (i > 4) break;
                    (!t || r.status !== m.yFH.TIMED_OUT) &&
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
            c.oQ,
        ),
        b = r.useState(() => new p.Fn(t))[0];
    return (r.useLayoutEffect(() => b.updateState(y, t)),
    r.useLayoutEffect(() => (b.initialize((0, u.b)()), () => b.cleanUp()), [b]),
    0 !== y.length || t)
        ? (0, i.jsx)(p.Gt.Provider, {
              value: b,
              children: (0, i.jsx)(a.Fai, {
                  items: y,
                  renderItem: E,
                  getItemKey: O,
                  wrapChildren: v,
              }),
          })
        : d
          ? t
              ? null
              : (0, i.jsx)(o.g, {
                    emptyText: g.intl.string(g.t.O1Nbjq),
                    icon: a.XFE,
                    absolute: !0,
                })
          : null;
});

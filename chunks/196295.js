n.d(t, { A: () => v }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    s = n(782603),
    l = n(518009),
    o = n(412477),
    d = n(592598),
    c = n(243612),
    u = n(545807),
    h = n(672910),
    m = n(57019),
    p = n(703552),
    g = n(672396),
    f = n(652215),
    _ = n(985018),
    x = n(669192);
let A = [];
function E(e) {
    return e.notification.id;
}
function S(e, t, n, r) {
    let { index: a, notification: s, locked: l, pinned: o } = t;
    return (0, i.jsx)(h.A, { index: a, notification: s, locked: l, pinned: o, transitionState: n, cleanUp: r }, e);
}
function I(e) {
    return (0, i.jsx)("div", { className: x.k, children: e });
}
let v = r.memo(function (e) {
    let { locked: t, pinned: n, showEmpty: h = !0 } = e,
        x = (0, a.bG)(
            [p.default, d.A],
            () => {
                if (d.A.isNotificationDisabled(g.KS.TextChat)) return A;
                let e = [],
                    i = 0;
                for (let r of p.default.getNotifications()) {
                    if (i > 4) break;
                    (!t || r.status !== f.yFH.TIMED_OUT) &&
                        (e.push({ index: i, locked: t, pinned: n, notification: r }), i++);
                }
                return e;
            },
            [t, n],
            c.oQ,
        ),
        v = r.useState(() => new m.Fn(t))[0];
    return (r.useLayoutEffect(() => v.updateState(x, t)),
    r.useLayoutEffect(() => (v.initialize((0, u.b)()), () => v.cleanUp()), [v]),
    0 !== x.length || t)
        ? (0, i.jsx)(m.Gt.Provider, {
              value: v,
              children: (0, i.jsx)(l.F, { items: x, renderItem: S, getItemKey: E, wrapChildren: I }),
          })
        : h
          ? t
              ? null
              : (0, i.jsx)(o.g, { emptyText: _.intl.string(_.t.O1Nbjq), icon: s.X, absolute: !0 })
          : null;
});

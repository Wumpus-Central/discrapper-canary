n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(412477),
    o = n(592598),
    d = n(243612),
    u = n(545807),
    c = n(672910),
    h = n(57019),
    A = n(703552),
    m = n(672396),
    g = n(652215),
    p = n(985018),
    f = n(288507);
let _ = [];
function E(e) {
    return e.notification.id;
}
function x(e, t, n, l) {
    let { index: a, notification: s, locked: r, pinned: o } = t;
    return (0, i.jsx)(c.A, { index: a, notification: s, locked: r, pinned: o, transitionState: n, cleanUp: l }, e);
}
function S(e) {
    return (0, i.jsx)("div", { className: f.k, children: e });
}
let I = l.memo(function (e) {
    let { locked: t, pinned: n, showEmpty: c = !0 } = e,
        f = (0, a.bG)(
            [A.A, o.A],
            () => {
                if (o.A.isNotificationDisabled(m.KS.TextChat)) return _;
                let e = [],
                    i = 0;
                for (let l of A.A.getNotifications()) {
                    if (i > 4) break;
                    (!t || l.status !== g.yFH.TIMED_OUT) &&
                        (e.push({ index: i, locked: t, pinned: n, notification: l }), i++);
                }
                return e;
            },
            [t, n],
            d.oQ,
        ),
        I = l.useState(() => new h.Fn(t))[0];
    return (l.useLayoutEffect(() => I.updateState(f, t)),
    l.useLayoutEffect(() => (I.initialize((0, u.b)()), () => I.cleanUp()), [I]),
    0 !== f.length || t)
        ? (0, i.jsx)(h.Gt.Provider, {
              value: I,
              children: (0, i.jsx)(s.Fai, { items: f, renderItem: x, getItemKey: E, wrapChildren: S }),
          })
        : c
          ? t
              ? null
              : (0, i.jsx)(r.g, { emptyText: p.intl.string(p.t.O1Nbjq), icon: s.XFE, absolute: !0 })
          : null;
});

n.d(t, { Z: () => _ }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
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
    y = n(401176);
let O = [];
function v(e) {
    return e.notification.id;
}
function b(e, t, n, r) {
    let { index: l, notification: o, locked: a, pinned: s } = t;
    return (0, i.jsx)(
        p.Z,
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
function E(e) {
    return (0, i.jsx)("div", {
        className: y.container,
        children: e,
    });
}
let _ = r.memo(function (e) {
    let { locked: t, pinned: n, showEmpty: p = !0 } = e,
        y = (0, l.e7)(
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
                            notification: r,
                        }),
                        i++);
                }
                return e;
            },
            [t, n],
            u.E6,
        ),
        _ = r.useState(() => new h.AS(t))[0];
    return (r.useLayoutEffect(() => _.updateState(y, t)),
    r.useLayoutEffect(() => (_.initialize((0, d.i)()), () => _.cleanUp()), [_]),
    0 !== y.length || t)
        ? (0, i.jsx)(h.S4.Provider, {
              value: _,
              children: (0, i.jsx)(o.W3x, {
                  items: y,
                  renderItem: b,
                  getItemKey: v,
                  wrapChildren: E,
              }),
          })
        : p
          ? t
              ? null
              : (0, i.jsx)(s.E, {
                    emptyText: g.intl.string(g.t.O1Nbjo),
                    icon: o.Dkj,
                    absolute: !0,
                })
          : null;
});

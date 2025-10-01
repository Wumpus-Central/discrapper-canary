n.d(t, { Z: () => S }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(486016),
    s = n(804570),
    u = n(624864),
    c = n(388627),
    d = n(561064),
    p = n(380736),
    h = n(693091),
    f = n(371467),
    m = n(981631),
    g = n(388032),
    O = n(401176);
let y = [];
function E(e) {
    return e.notification.id;
}
function v(e, t, n, r) {
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
function b(e) {
    return (0, i.jsx)("div", {
        className: O.container,
        children: e,
    });
}
let S = r.memo(function (e) {
    let { locked: t, pinned: n, showEmpty: p = !0 } = e,
        O = (0, l.e7)(
            [f.Z, u.Z],
            () => {
                if (u.Z.isNotificationDisabled(a.OverlayNotificationDisabledSetting.TEXT_CHAT)) return y;
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
            c.E6,
        ),
        S = r.useState(() => new h.AS(t))[0];
    return (r.useLayoutEffect(() => S.updateState(O, t)),
    r.useLayoutEffect(() => (S.initialize((0, d.i)()), () => S.cleanUp()), [S]),
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

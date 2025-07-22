n.d(t, {
    C: () => y,
    Z: () => v
});
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(230711),
    s = n(549879),
    l = n(394821),
    c = n(841784),
    u = n(833664),
    d = n(503438),
    _ = n(579630),
    f = n(26033),
    p = n(594174),
    h = n(324745),
    m = n(981631),
    g = n(388032);
let E = () => o.Z.open(m.oAB.CONNECTIONS, null);
function b(e) {
    let { activity: t, onOpenGameSettings: n } = e;
    return (0, _.Z)(t) || (0, d.Z)(t) || (0, l.Z)(t) ? E : (0, u.Z)(t) && !(0, c.Z)(t) ? n : null;
}
function y(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, f.aA)(t) || (0, f.y0)(t) || (0, f.dU)(t) ? E : (0, f.dX)(t) ? n : null;
}
function O(e) {
    let { activity: t, entry: n, onOpenGameSettings: r } = e;
    return null != n
        ? y({
              entry: n,
              onOpenGameSettings: r
          })
        : null != t
          ? b({
                activity: t,
                onOpenGameSettings: r
            })
          : null;
}
function v(e) {
    let { user: t, activity: n, entry: o, onAction: l, onClose: c, appContext: u } = e,
        d = (0, h.Z)({ onClose: c });
    if (
        !(0, i.e7)([p.default], () => {
            var e;
            return (null == (e = p.default.getCurrentUser()) ? void 0 : e.id) === t.id;
        })
    )
        return null;
    let _ = O({
        activity: n,
        entry: o,
        onOpenGameSettings: d
    });
    return null == _
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'manage-privacy',
              label: g.intl.string(g.t.anfNPT),
              action: () => {
                  (null == l || l({ action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM' }), _(), (0, s.i)(u), null == c || c());
              }
          });
}

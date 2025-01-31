n.d(t, {
    C: () => v,
    Z: () => I
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(394821),
    l = n(841784),
    u = n(833664),
    c = n(503438),
    d = n(579630),
    f = n(26033),
    _ = n(594174),
    p = n(324745),
    h = n(981631),
    m = n(388032);
let g = () => s.Z.open(h.oAB.CONNECTIONS, null);
function E(e) {
    let { activity: t, onOpenGameSettings: n } = e;
    return (0, d.Z)(t) || (0, c.Z)(t) || (0, o.Z)(t) ? g : (0, u.Z)(t) && !(0, l.Z)(t) ? n : null;
}
function v(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, f.aA)(t) || (0, f.y0)(t) || (0, f.dU)(t) ? g : (0, f.dX)(t) ? n : null;
}
function y(e) {
    let { activity: t, entry: n, onOpenGameSettings: i } = e;
    return null != n
        ? v({
              entry: n,
              onOpenGameSettings: i
          })
        : null != t
          ? E({
                activity: t,
                onOpenGameSettings: i
            })
          : null;
}
function I(e) {
    let { user: t, activity: n, entry: s, onAction: o, onClose: l } = e,
        u = (0, p.Z)({ onClose: l });
    if (
        !(0, r.e7)([_.default], () => {
            var e;
            return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
        })
    )
        return null;
    let c = y({
        activity: n,
        entry: s,
        onOpenGameSettings: u
    });
    return null == c
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'manage-privacy',
              label: m.intl.string(m.t.anfNPT),
              action: () => {
                  null == o || o({ action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM' }), c(), null == l || l();
              }
          });
}

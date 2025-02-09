n.d(t, {
    C: () => y,
    Z: () => T
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(549879),
    l = n(394821),
    u = n(841784),
    c = n(833664),
    d = n(503438),
    f = n(579630),
    _ = n(26033),
    p = n(594174),
    h = n(324745),
    m = n(981631),
    g = n(388032);
let E = () => s.Z.open(m.oAB.CONNECTIONS, null);
function v(e) {
    let { activity: t, onOpenGameSettings: n } = e;
    return (0, f.Z)(t) || (0, d.Z)(t) || (0, l.Z)(t) ? E : (0, c.Z)(t) && !(0, u.Z)(t) ? n : null;
}
function y(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, _.aA)(t) || (0, _.y0)(t) || (0, _.dU)(t) ? E : (0, _.dX)(t) ? n : null;
}
function I(e) {
    let { activity: t, entry: n, onOpenGameSettings: i } = e;
    return null != n
        ? y({
              entry: n,
              onOpenGameSettings: i
          })
        : null != t
          ? v({
                activity: t,
                onOpenGameSettings: i
            })
          : null;
}
function T(e) {
    let { user: t, activity: n, entry: s, onAction: l, onClose: u, appContext: c } = e,
        d = (0, h.Z)({ onClose: u });
    if (
        !(0, r.e7)([p.default], () => {
            var e;
            return (null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
        })
    )
        return null;
    let f = I({
        activity: n,
        entry: s,
        onOpenGameSettings: d
    });
    return null == f
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'manage-privacy',
              label: g.intl.string(g.t.anfNPT),
              action: () => {
                  null == l || l({ action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM' }), f(), (0, o.i)(c), null == u || u();
              }
          });
}

r.d(n, {
    C: function () {
        return y;
    },
    Z: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(230711),
    l = r(394821),
    u = r(841784),
    c = r(833664),
    d = r(503438),
    f = r(579630),
    p = r(26033),
    h = r(594174),
    _ = r(324745),
    m = r(981631),
    g = r(388032);
let E = () => s.Z.open(m.oAB.CONNECTIONS, null);
function v(e) {
    let { activity: n, onOpenGameSettings: r } = e;
    return (0, f.Z)(n) || (0, d.Z)(n) || (0, l.Z)(n) ? E : (0, c.Z)(n) && !(0, u.Z)(n) ? r : null;
}
function y(e) {
    let { entry: n, onOpenGameSettings: r } = e;
    return (0, p.aA)(n) || (0, p.y0)(n) || (0, p.dU)(n) ? E : (0, p.dX)(n) ? r : null;
}
function b(e) {
    let { activity: n, entry: r, onOpenGameSettings: i } = e;
    return null != r
        ? y({
              entry: r,
              onOpenGameSettings: i
          })
        : null != n
          ? v({
                activity: n,
                onOpenGameSettings: i
            })
          : null;
}
function I(e) {
    let { user: n, activity: r, entry: s, onAction: l, onClose: u } = e,
        c = (0, _.Z)({ onClose: u });
    if (
        !(0, a.e7)([h.default], () => {
            var e;
            return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n.id;
        })
    )
        return null;
    let d = b({
        activity: r,
        entry: s,
        onOpenGameSettings: c
    });
    return null == d
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'manage-privacy',
              label: g.intl.string(g.t.anfNPT),
              action: () => {
                  null == l || l({ action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM' }), d(), null == u || u();
              }
          });
}

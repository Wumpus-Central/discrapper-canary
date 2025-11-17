n.d(t, {
    C: () => O,
    Z: () => I,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(394821),
    s = n(841784),
    l = n(833664),
    c = n(503438),
    u = n(579630),
    d = n(26033),
    f = n(887413),
    _ = n(313789),
    p = n(518596),
    h = n(594174),
    m = n(324745),
    g = n(981631),
    E = n(388032);
let b = () => (0, p.openUserSettings)(_.n.CONNECTIONS_PANEL, { section: g.oAB.CONNECTIONS });
function y(e) {
    let { activity: t, onOpenGameSettings: n } = e;
    return (0, u.Z)(t) || (0, c.Z)(t) || (0, o.Z)(t) ? b : (0, l.Z)(t) && !(0, s.Z)(t) ? n : null;
}
function O(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, d.aA)(t) || (0, d.y0)(t) || (0, d.dU)(t) ? b : (0, d.dX)(t) ? n : null;
}
function v(e) {
    let { activity: t, entry: n, onOpenGameSettings: r } = e;
    return null != n
        ? O({
              entry: n,
              onOpenGameSettings: r,
          })
        : null != t
          ? y({
                activity: t,
                onOpenGameSettings: r,
            })
          : null;
}
function I(e) {
    let { user: t, activity: n, entry: o, onAction: s, onClose: l, appContext: c } = e,
        u = (0, m.Z)();
    if (
        !(0, i.e7)([h.default], () => {
            var e;
            return (null == (e = h.default.getCurrentUser()) ? void 0 : e.id) === t.id;
        })
    )
        return null;
    let d = v({
        activity: n,
        entry: o,
        onOpenGameSettings: u,
    });
    return null == d
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "manage-privacy",
              label: E.intl.string(E.t.anfNPV),
              action: () => {
                  null == s || s({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), d(), (0, f.i)(c), null == l || l();
              },
          });
}

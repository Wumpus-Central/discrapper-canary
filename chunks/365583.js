n.d(t, {
    C: () => O,
    Z: () => I,
});
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(549879),
    s = n(394821),
    l = n(841784),
    c = n(833664),
    u = n(503438),
    d = n(579630),
    f = n(26033),
    _ = n(313789),
    p = n(518596),
    h = n(594174),
    m = n(324745),
    g = n(981631),
    E = n(388032);
let b = () => (0, p.openUserSettings)(_.n.CONNECTIONS_PANEL, { section: g.oAB.CONNECTIONS });
function y(e) {
    let { activity: t, onOpenGameSettings: n } = e;
    return (0, d.Z)(t) || (0, u.Z)(t) || (0, s.Z)(t) ? b : (0, c.Z)(t) && !(0, l.Z)(t) ? n : null;
}
function O(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, f.aA)(t) || (0, f.y0)(t) || (0, f.dU)(t) ? b : (0, f.dX)(t) ? n : null;
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
    let { user: t, activity: n, entry: s, onAction: l, onClose: c, appContext: u } = e,
        d = (0, m.Z)();
    if (
        !(0, i.e7)([h.default], () => {
            var e;
            return (null == (e = h.default.getCurrentUser()) ? void 0 : e.id) === t.id;
        })
    )
        return null;
    let f = v({
        activity: n,
        entry: s,
        onOpenGameSettings: d,
    });
    return null == f
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "manage-privacy",
              label: E.intl.string(E.t.anfNPT),
              action: () => {
                  null == l || l({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), f(), (0, o.i)(u), null == c || c();
              },
          });
}

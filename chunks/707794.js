"use strict";
n.d(t, { A: () => d });
var r = n(541806),
    i = n(765379),
    a = n(672979),
    s = n(409626),
    o = n(692969),
    l = n(934173),
    u = n(534465),
    c = n(695311);
function d(e) {
    let { location: t, user: n, currentUser: d, activity: _, application: f, entry: p, onClose: h } = e,
        m = (0, o.A)({
            location: t,
            source: s.Ob.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, u.UE)({ user: n, activity: _, entry: p }),
        }),
        g = (0, c.A)({ applicationId: f?.id, onClose: h }),
        E = (0, i.A)(_);
    return E && null != f
        ? g
        : !E && (0, a.A)(_)
          ? m
          : (0, r.A)(_) && n.id !== d.id
            ? () => (0, l.y)({ activity: _, user: n, index: 0 })
            : void 0;
}

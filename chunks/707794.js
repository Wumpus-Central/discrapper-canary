e.d(n, { A: () => d });
var i = e(541806),
    l = e(765379),
    r = e(672979),
    a = e(409626),
    s = e(692969),
    o = e(934173),
    c = e(534465),
    u = e(695311);
function d(t) {
    let { location: n, user: e, currentUser: d, activity: A, application: x, entry: p, onClose: f } = t,
        _ = (0, s.A)({
            location: n,
            source: a.Ob.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, c.UE)({ user: e, activity: A, entry: p }),
        }),
        m = (0, u.A)({ applicationId: x?.id, onClose: f }),
        g = (0, l.A)(A);
    return g && null != x
        ? m
        : !g && (0, r.A)(A)
          ? _
          : (0, i.A)(A) && e.id !== d.id
            ? () => (0, o.y)({ activity: A, user: e, index: 0 })
            : void 0;
}

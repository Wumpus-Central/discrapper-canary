n.d(t, { Z: () => f });
var r = n(54381),
    i = n(231429),
    a = n(100527),
    o = n(906732),
    s = n(728345),
    l = n(973616),
    c = n(789407),
    u = n(616922);
function d(e) {
    return null != e.application
        ? l.ZP.createFromServer(e.application)
        : null != e.activity && null != e.activity.party_id && (0, u.Ps)(e.activity.party_id)
          ? c.r9
          : void 0;
}
let f = (e) => {
    var t;
    let { channel: n, message: l, hideParty: c } = e,
        { analyticsLocations: u } = (0, o.ZP)(a.Z.INVITE_EMBED),
        f = d(l),
        { data: p } = (0, s.IX)(null == (t = l.application) ? void 0 : t.id),
        _ = null != p ? p : f;
    return null == _
        ? null
        : (0, r.jsx)(i.c, {
              app: _,
              channel: n,
              message: l,
              hideParty: c,
              analyticsLocations: u,
          });
};

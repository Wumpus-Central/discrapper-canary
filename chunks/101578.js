n.d(t, { Z: () => d });
var r = n(255367),
    i = n(627861),
    l = n(100527),
    a = n(906732),
    o = n(728345),
    s = n(973616),
    c = n(789407),
    u = n(616922);
let d = (e) => {
    var t;
    let { channel: n, message: d, hideParty: p } = e,
        { analyticsLocations: m } = (0, a.ZP)(l.Z.INVITE_EMBED),
        f = null != d.application ? s.ZP.createFromServer(d.application) : null != d.activity && null != d.activity.party_id && (0, u.Ps)(d.activity.party_id) ? c.r9 : void 0,
        { data: _ } = (0, o.IX)(null == (t = d.application) ? void 0 : t.id),
        g = null != _ ? _ : f;
    return null == g
        ? null
        : (0, r.jsx)(i.c, {
              app: g,
              channel: n,
              message: d,
              hideParty: p,
              analyticsLocations: m
          });
};

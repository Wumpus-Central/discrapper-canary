n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(351405),
    a = n(793574),
    s = n(688810),
    o = n(627363),
    l = n(611010),
    c = n(443795),
    u = n(272984);

function d(e) {
    return null != e.application
        ? l.Ay.createFromServer(e.application)
        : null != e.activity && null != e.activity.party_id && (0, u.pH)(e.activity.party_id)
          ? c.HT
          : void 0;
}
let f = (e) => {
    var t;
    let { channel: n, message: l, hideParty: c } = e,
        { analyticsLocations: u } = (0, s.Ay)(a.A.INVITE_EMBED),
        f = d(l),
        { data: p } = (0, o.YY)(null == (t = l.application) ? void 0 : t.id),
        _ = null != p ? p : f;
    return null == _
        ? null
        : (0, r.jsx)(i.P, {
              app: _,
              channel: n,
              message: l,
              hideParty: c,
              analyticsLocations: u,
          });
};

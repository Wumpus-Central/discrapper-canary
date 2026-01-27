n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(351405),
    l = n(793574),
    a = n(688810),
    s = n(627363),
    o = n(611010),
    c = n(443795),
    u = n(272984);
let d = (e) => {
    var t;
    let { channel: n, message: d, hideParty: p } = e,
        { analyticsLocations: m } = (0, a.Ay)(l.A.INVITE_EMBED),
        f =
            null != d.application
                ? o.Ay.createFromServer(d.application)
                : null != d.activity && null != d.activity.party_id && (0, u.pH)(d.activity.party_id)
                  ? c.HT
                  : void 0,
        { data: g } = (0, s.YY)(null == (t = d.application) ? void 0 : t.id),
        h = null != g ? g : f;
    return null == h
        ? null
        : (0, r.jsx)(i.P, {
              app: h,
              channel: n,
              message: d,
              hideParty: p,
              analyticsLocations: m,
          });
};

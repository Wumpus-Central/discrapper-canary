n.d(t, { A: () => u });
var i = n(627968),
    l = n(351405),
    a = n(793574),
    s = n(688810),
    r = n(627363),
    o = n(611010),
    d = n(443795),
    c = n(272984);
let u = (e) => {
    let { channel: t, message: n, hideParty: u } = e,
        { analyticsLocations: m } = (0, s.Ay)(a.A.INVITE_EMBED),
        _ =
            null != n.application
                ? o.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, c.pH)(n.activity.party_id)
                  ? d.HT
                  : void 0,
        { data: h } = (0, r.YY)(n.application?.id),
        p = h ?? _;
    return null == p ? null : (0, i.jsx)(l.P, { app: p, channel: t, message: n, hideParty: u, analyticsLocations: m });
};

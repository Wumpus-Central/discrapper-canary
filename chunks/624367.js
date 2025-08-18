n.d(t, { Z: () => d }), n(388685);
var r = n(951288);
n(647438);
var i = n(100527),
    l = n(906732),
    o = n(783097),
    a = n(230171),
    s = n(835473),
    c = n(365415),
    u = n(50523);
function d(e) {
    let { applicationId: t, customId: n, referrerId: d, linkId: p } = e,
        { analyticsLocations: m } = (0, l.ZP)(i.Z.ACTIVITY_BOOKMARK),
        [f] = (0, s.Z)([t]),
        g = null != f && (0, o.ye)(f),
        { data: _, error: h } = (0, c.h)(null == f ? void 0 : f.id, p);
    return null == f || !1 === g
        ? null
        : null != p && null == h && null != _
          ? (0, r.jsx)(l.Gt, {
                value: m,
                children: (0, r.jsx)(u.b, {
                    application: f,
                    customId: n,
                    customLink: _,
                    referrerId: d,
                }),
            })
          : (0, r.jsx)(l.Gt, {
                value: m,
                children: (0, r.jsx)(a.O, {
                    app: f,
                    linkType: a.U.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: d,
                }),
            });
}

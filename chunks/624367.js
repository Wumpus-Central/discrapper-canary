(n.d(t, { Z: () => d }), n(388685));
var r = n(255367);
n(73800);
var i = n(100527),
    l = n(906732),
    a = n(783097),
    o = n(230171),
    s = n(835473),
    c = n(365415),
    u = n(50523);
function d(e) {
    let { applicationId: t, customId: n, referrerId: d, linkId: p } = e,
        { analyticsLocations: m } = (0, l.ZP)(i.Z.ACTIVITY_BOOKMARK),
        [f] = (0, s.Z)([t]),
        h = null != f && (0, a.ye)(f),
        { data: g, error: _ } = (0, c.h)(null == f ? void 0 : f.id, p);
    return null == f || !1 === h
        ? null
        : null != p && null == _ && null != g
          ? (0, r.jsx)(l.Gt, {
                value: m,
                children: (0, r.jsx)(u.b, {
                    application: f,
                    customId: n,
                    customLink: g,
                    referrerId: d
                })
            })
          : (0, r.jsx)(l.Gt, {
                value: m,
                children: (0, r.jsx)(o.O, {
                    app: f,
                    linkType: o.U.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: d
                })
            });
}

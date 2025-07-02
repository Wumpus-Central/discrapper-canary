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
    let { applicationId: t, customId: n, referrerId: d, embedUrl: p, linkId: m } = e,
        { analyticsLocations: f } = (0, l.ZP)(i.Z.ACTIVITY_BOOKMARK),
        [g] = (0, s.Z)([t]),
        _ = null != g && (0, a.ye)(g),
        { data: h, error: b } = (0, c.h)(null == g ? void 0 : g.id, m);
    return null == g || !1 === _
        ? null
        : null != m && null == b && null != h
          ? (0, r.jsx)(l.Gt, {
                value: f,
                children: (0, r.jsx)(u.b, {
                    application: g,
                    customId: n,
                    customLink: h,
                    embedUrl: p,
                    referrerId: d
                })
            })
          : (0, r.jsx)(l.Gt, {
                value: f,
                children: (0, r.jsx)(o.O, {
                    app: g,
                    embedUrl: p,
                    linkType: o.U.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: d
                })
            });
}

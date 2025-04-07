n.d(t, { Z: () => d }), n(388685);
var r = n(200651);
n(192379);
var i = n(100527),
    a = n(906732),
    l = n(783097),
    o = n(230171),
    s = n(835473),
    c = n(365415),
    u = n(50523);
function d(e) {
    let { applicationId: t, customId: n, referrerId: d, embedUrl: p, linkId: m } = e,
        { analyticsLocations: f } = (0, a.ZP)(i.Z.ACTIVITY_BOOKMARK),
        [h] = (0, s.Z)([t]),
        g = null != h && (0, l.ye)(h),
        { data: _, error: b } = (0, c.h)(null == h ? void 0 : h.id, m);
    return null == h || !1 === g
        ? null
        : null != m && null == b && null != _
          ? (0, r.jsx)(a.Gt, {
                value: f,
                children: (0, r.jsx)(u.b, {
                    application: h,
                    customId: n,
                    customLink: _,
                    embedUrl: p,
                    referrerId: d
                })
            })
          : (0, r.jsx)(a.Gt, {
                value: f,
                children: (0, r.jsx)(o.O, {
                    app: h,
                    embedUrl: p,
                    linkType: o.U.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: d
                })
            });
}

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
        [_] = (0, s.Z)([t]),
        g = null != _ && (0, a.ye)(_),
        { data: h, error: b } = (0, c.h)(null == _ ? void 0 : _.id, m);
    return null == _ || !1 === g
        ? null
        : null != m && null == b && null != h
          ? (0, r.jsx)(l.Gt, {
                value: f,
                children: (0, r.jsx)(u.b, {
                    application: _,
                    customId: n,
                    customLink: h,
                    embedUrl: p,
                    referrerId: d
                })
            })
          : (0, r.jsx)(l.Gt, {
                value: f,
                children: (0, r.jsx)(o.O, {
                    app: _,
                    embedUrl: p,
                    linkType: o.U.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: d
                })
            });
}

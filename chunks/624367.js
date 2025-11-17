n.d(t, { Z: () => f }), n(388685);
var r = n(54381);
n(473749);
var i = n(100527),
    a = n(906732),
    o = n(783097),
    s = n(230171),
    l = n(835473),
    c = n(365415),
    u = n(50523),
    d = n(967249);
function f(e) {
    let { applicationId: t, customId: n, referrerId: f, linkId: _, message: p } = e,
        { analyticsLocations: h } = (0, a.ZP)(i.Z.ACTIVITY_BOOKMARK),
        [m] = (0, l.Z)([t]),
        g = null != m && (0, o.ye)(m),
        { data: E, error: b } = (0, c.h)(null == m ? void 0 : m.id, _);
    return null == m || !1 === g
        ? null
        : null != _ && null == b && null != E
          ? (0, r.jsx)(a.Gt, {
                value: h,
                children: (0, r.jsx)(u.b, {
                    application: m,
                    customId: n,
                    customLink: E,
                    referrerId: f,
                    message: p,
                }),
            })
          : (0, r.jsx)(a.Gt, {
                value: h,
                children: (0, r.jsx)(s.O, {
                    app: m,
                    linkType: d.U.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: f,
                    message: p,
                }),
            });
}

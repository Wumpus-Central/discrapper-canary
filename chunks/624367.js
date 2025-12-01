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
    let { applicationId: t, customId: n, referrerId: f, linkId: p, message: _ } = e,
        { analyticsLocations: m } = (0, a.ZP)(i.Z.ACTIVITY_BOOKMARK),
        [h] = (0, l.Z)([t]),
        g = null != h && (0, o.ye)(h),
        { data: E, error: b } = (0, c.h)(null == h ? void 0 : h.id, p);
    return null == h || !1 === g
        ? null
        : null != p && null == b && null != E
          ? (0, r.jsx)(a.Gt, {
                value: m,
                children: (0, r.jsx)(u.b, {
                    application: h,
                    customId: n,
                    customLink: E,
                    referrerId: f,
                    message: _,
                }),
            })
          : (0, r.jsx)(a.Gt, {
                value: m,
                children: (0, r.jsx)(s.O, {
                    app: h,
                    linkType: d.U.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: f,
                    message: _,
                }),
            });
}

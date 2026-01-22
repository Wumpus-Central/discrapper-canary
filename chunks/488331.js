n.d(t, { A: () => f }), n(896048);
var r = n(627968);
n(64700);
var i = n(793574),
    a = n(688810),
    s = n(735991),
    o = n(485724),
    l = n(429913),
    c = n(246097),
    u = n(96440),
    d = n(768349);
function f(e) {
    let { applicationId: t, customId: n, referrerId: f, linkId: p, message: _ } = e,
        { analyticsLocations: h } = (0, a.Ay)(i.A.ACTIVITY_BOOKMARK),
        [m] = (0, l.A)([t]),
        g = null != m && (0, s.Ag)(m),
        { data: E, error: b } = (0, c.K)(null == m ? void 0 : m.id, p);
    return null == m || !1 === g
        ? null
        : null != p && null == b && null != E
          ? (0, r.jsx)(a.f5, {
                value: h,
                children: (0, r.jsx)(u.W, {
                    application: m,
                    customId: n,
                    customLink: E,
                    referrerId: f,
                    message: _,
                }),
            })
          : (0, r.jsx)(a.f5, {
                value: h,
                children: (0, r.jsx)(o.W, {
                    app: m,
                    linkType: d.J.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: f,
                    message: _,
                }),
            });
}

n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(793574),
    a = n(688810),
    s = n(735991),
    r = n(485724),
    o = n(429913),
    d = n(246097),
    c = n(96440),
    u = n(768349);
function m(e) {
    let { applicationId: t, customId: n, referrerId: m, linkId: _, message: h } = e,
        { analyticsLocations: p } = (0, a.Ay)(l.A.ACTIVITY_BOOKMARK),
        [g] = (0, o.A)([t]),
        A = null != g && (0, s.Ag)(g),
        { data: f, error: x } = (0, d.K)(g?.id, _);
    return null == g || !1 === A
        ? null
        : null != _ && null == x && null != f
          ? (0, i.jsx)(a.f5, {
                value: p,
                children: (0, i.jsx)(c.W, { application: g, customId: n, customLink: f, referrerId: m, message: h }),
            })
          : (0, i.jsx)(a.f5, {
                value: p,
                children: (0, i.jsx)(r.W, {
                    app: g,
                    linkType: u.J.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: m,
                    message: h,
                }),
            });
}

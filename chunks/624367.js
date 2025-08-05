(n.d(t, { Z: () => d }), n(388685));
var r = n(255367);
n(73800);
var i = n(100527),
    a = n(906732),
    o = n(783097),
    s = n(230171),
    l = n(835473),
    c = n(365415),
    u = n(50523);
function d(e) {
    let { applicationId: t, customId: n, referrerId: d, linkId: f } = e,
        { analyticsLocations: _ } = (0, a.ZP)(i.Z.ACTIVITY_BOOKMARK),
        [p] = (0, l.Z)([t]),
        h = null != p && (0, o.ye)(p),
        { data: m, error: g } = (0, c.h)(null == p ? void 0 : p.id, f);
    return null == p || !1 === h
        ? null
        : null != f && null == g && null != m
          ? (0, r.jsx)(a.Gt, {
                value: _,
                children: (0, r.jsx)(u.b, {
                    application: p,
                    customId: n,
                    customLink: m,
                    referrerId: d
                })
            })
          : (0, r.jsx)(a.Gt, {
                value: _,
                children: (0, r.jsx)(s.O, {
                    app: p,
                    linkType: s.U.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: d
                })
            });
}

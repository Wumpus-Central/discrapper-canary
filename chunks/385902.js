n.d(t, { _: () => h });
var r = n(494497),
    i = n(442837),
    l = n(905128),
    o = n(158638),
    a = n(973772),
    s = n(834209),
    c = n(535396),
    u = n(93841),
    d = n(388032);
function h(e, t) {
    let n = (0, i.e7)([l.Z], () => l.Z.getStateForGuild(e)),
        h = null == n ? void 0 : n.allPowerups[r.A$],
        p = (0, a.Z)(e, h),
        f = (0, o.q8)(e, t),
        g = null == h ? void 0 : h.storeRemovalDate,
        m = f && null != g && p.type !== c.A3.INACTIVE,
        b = m
            ? {
                  title: d.intl.formatToPlainString(u.default.mgoPkZ, { perkName: null == h ? void 0 : h.title }),
                  description: d.intl.formatToPlainString(u.default.UT9pkJ, { dateString: (0, s.Z)(g) })
              }
            : null;
    return {
        shouldShow: m,
        notificationConfig: b
    };
}

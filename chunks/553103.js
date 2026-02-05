n.d(t, { A: () => g });
var i = n(512750),
    l = n(311907),
    s = n(71393),
    a = n(645619),
    r = n(840120),
    o = n(162362),
    d = n(998418),
    c = n(568065),
    u = n(652215),
    h = n(333354),
    A = n(985018);
function g(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.getGuild(e)?.features),
        g = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        m = g?.allPowerups[i.FB],
        p = (0, d.Ay)(e, m),
        _ = (0, r.j$)(e, t),
        x = m?.storeRemovalDate,
        f = n?.has(u.GuildFeatures.PARTNERED) ?? !1,
        E = _ && null != x && !f && p.type === c.b_.POWERUP_ACTIVATED,
        C = E
            ? {
                  title: A.intl.formatToPlainString(h.default.mgoPkU, { perkName: m?.title }),
                  description: A.intl.formatToPlainString(h.default.UT9pkI, { dateString: (0, o.A)(x) }),
              }
            : null;
    return { shouldShow: E, notificationConfig: C };
}

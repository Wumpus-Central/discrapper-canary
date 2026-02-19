"use strict";
n.d(t, { A: () => p });
var i = n(512750),
    s = n(311907),
    l = n(71393),
    r = n(645619),
    a = n(840120),
    o = n(162362),
    c = n(998418),
    d = n(568065),
    u = n(652215),
    h = n(333354),
    A = n(985018);
function p(e, t) {
    let n = (0, s.bG)([l.A], () => l.A.getGuild(e)?.features),
        p = (0, s.bG)([r.A], () => r.A.getStateForGuild(e)),
        g = p?.allPowerups[i.FB],
        m = (0, c.Ay)(e, g),
        _ = (0, a.j$)(e, t),
        f = g?.storeRemovalDate,
        x = n?.has(u.GuildFeatures.PARTNERED) ?? !1,
        C = _ && null != f && !x && m.type === d.b_.POWERUP_ACTIVATED,
        E = C
            ? {
                  title: A.intl.formatToPlainString(h.default.mgoPkU, { perkName: g?.title }),
                  description: A.intl.formatToPlainString(h.default.UT9pkI, { dateString: (0, o.A)(f) }),
              }
            : null;
    return { shouldShow: C, notificationConfig: E };
}

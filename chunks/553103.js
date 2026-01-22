n.d(t, { A: () => h });
var r = n(512750),
    l = n(311907),
    i = n(71393),
    a = n(645619),
    s = n(840120),
    o = n(162362),
    c = n(998418),
    u = n(568065),
    d = n(652215),
    f = n(333354),
    p = n(985018);
function h(e, t) {
    var n;
    let h = (0, l.bG)([i.A], () => {
            var t;
            return null == (t = i.A.getGuild(e)) ? void 0 : t.features;
        }),
        b = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        g = null == b ? void 0 : b.allPowerups[r.FB],
        m = (0, c.Ay)(e, g),
        A = (0, s.j$)(e, t),
        y = null == g ? void 0 : g.storeRemovalDate,
        O = null != (n = null == h ? void 0 : h.has(d.GuildFeatures.PARTNERED)) && n,
        j = A && null != y && !O && m.type === u.b_.POWERUP_ACTIVATED,
        v = j
            ? {
                  title: p.intl.formatToPlainString(f.default.mgoPkU, { perkName: null == g ? void 0 : g.title }),
                  description: p.intl.formatToPlainString(f.default.UT9pkI, { dateString: (0, o.A)(y) }),
              }
            : null;
    return {
        shouldShow: j,
        notificationConfig: v,
    };
}

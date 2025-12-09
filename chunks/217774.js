n.d(t, { Z: () => p });
var r = n(473749),
    i = n(442837),
    a = n(915346),
    o = n(728345),
    s = n(48131),
    l = n(591472),
    c = n(813370),
    u = n(317381),
    d = n(197386),
    f = n(408491);
function p(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: p, runAfterLaunchAttempt: _ } = e,
        { data: m } = (0, o.IX)(t),
        h = (0, i.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
        g = (0, i.e7)([l.Z], () => l.Z.getConnectedFrame()),
        E = (0, c.A)(m);
    return r.useCallback(async () => {
        if (null == t || null == m) return;
        let e = null != h && h.applicationId === t;
        if (null != g && g.applicationId === t)
            return void s.Z.updateFrameLayoutMode({
                applicationId: g.applicationId,
                layoutMode: f.U.FOCUSED,
            });
        if (e) {
            let e = h.location;
            (0, d.Z)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        null == p || p();
        try {
            if (E) s.Z.launchFrame({ applicationId: t });
            else {
                var r, i;
                (null == m || null == (r = m.bot) ? void 0 : r.id) != null &&
                    (await (0, a.W)({
                        appId: t,
                        botId: null == m || null == (i = m.bot) ? void 0 : i.id,
                        analyticsLocations: null != n ? n : [],
                    }));
            }
        } catch (e) {}
        null == _ || _();
    }, [n, m, t, E, h, g, _, p]);
}

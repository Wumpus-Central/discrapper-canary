n.d(t, { Z: () => p });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(906732),
    c = n(131951),
    d = n(321614),
    u = n(345655),
    g = n(388032),
    m = n(20493);
function p() {
    let { analyticsLocations: e } = (0, o.ZP)(),
        t = (0, s.e7)([c.Z], () => c.Z.getActiveInputProfile()),
        { enabledInputProfiles: n } = (0, d.c)({ location: 'UserSettingsInputProfile' }),
        p = r.useCallback(
            (t) => {
                let { value: n } = t;
                a.Z.setActiveInputProfile(n, { analyticsLocations: e });
            },
            [e]
        ),
        h = [
            {
                value: u._.VOICE_ISOLATION,
                name: g.intl.string(g.t.cjPbpa),
                desc: g.intl.string(g.t.CzhvnJ)
            },
            {
                value: u._.STUDIO,
                name: g.intl.string(g.t.VZPR0d),
                desc: g.intl.string(g.t.ZaJksb)
            },
            {
                value: u._.CUSTOM,
                name: g.intl.string(g.t['N/PQjo']),
                desc: g.intl.string(g.t.SnBmub)
            }
        ].filter((e) => {
            let { value: t } = e;
            return n.includes(t);
        });
    return (0, i.jsx)(l.xJW, {
        title: g.intl.string(g.t.LM3U3t),
        className: m.marginBottom20,
        children: (0, i.jsx)(l.FXm, {
            onChange: p,
            options: h,
            value: null != t ? t : u._.CUSTOM
        })
    });
}

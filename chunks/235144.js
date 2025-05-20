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
    m = n(388032),
    g = n(20493);
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
                name: m.intl.string(m.t.cjPbpa),
                desc: m.intl.string(m.t.CzhvnJ)
            },
            {
                value: u._.STUDIO,
                name: m.intl.string(m.t.VZPR0d),
                desc: m.intl.string(m.t.ZaJksb)
            },
            {
                value: u._.CUSTOM,
                name: m.intl.string(m.t['N/PQjo']),
                desc: m.intl.string(m.t.SnBmub)
            }
        ].filter((e) => {
            let { value: t } = e;
            return n.includes(t);
        });
    return (0, i.jsx)(l.xJW, {
        title: m.intl.string(m.t.LM3U3t),
        className: g.marginBottom20,
        children: (0, i.jsx)(l.FXm, {
            onChange: p,
            options: h,
            value: null != t ? t : u._.CUSTOM
        })
    });
}

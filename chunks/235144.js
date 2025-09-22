n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(538534),
    s = n(481060),
    l = n(846027),
    c = n(906732),
    u = n(131951),
    d = n(321614),
    f = n(345655),
    _ = n(388032),
    p = n(197571);
function h() {
    let { analyticsLocations: e } = (0, c.ZP)(),
        t = (0, a.e7)([u.Z], () => u.Z.getActiveInputProfile()),
        { enabledInputProfiles: n } = (0, d.c)({
            location: "UserSettingsInputProfile",
            autoTrackExposure: !1,
        }),
        h = i.useCallback(
            (t) => {
                let { value: n } = t;
                l.Z.setActiveInputProfile(n, { analyticsLocations: e });
            },
            [e],
        ),
        m = [
            {
                value: f._.VOICE_ISOLATION,
                name: _.intl.string(_.t.cjPbpa),
                desc: _.intl.string(_.t.CzhvnJ),
            },
            {
                value: f._.STUDIO,
                name: _.intl.string(_.t.VZPR0d),
                desc: _.intl.string(_.t.ZaJksb),
            },
            {
                value: f._.CUSTOM,
                name: _.intl.string(_.t["N/PQjo"]),
                desc: _.intl.string(_.t.SnBmub),
            },
        ].filter((e) => {
            let { value: t } = e;
            return n.includes(t);
        });
    return (0, r.jsx)(s.xJW, {
        title: _.intl.string(_.t.LM3U3t),
        className: p.marginBottom20,
        children: (0, r.jsx)(o.E, {
            onChange: (e) => h({ value: e }),
            options: m,
            value: null != t ? t : f._.CUSTOM,
        }),
    });
}

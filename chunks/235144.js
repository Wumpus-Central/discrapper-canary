n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(538534),
    s = n(846027),
    l = n(906732),
    c = n(131951),
    u = n(846071),
    d = n(345655),
    f = n(388032),
    _ = n(10198);
function p() {
    let { analyticsLocations: e } = (0, l.ZP)(),
        t = (0, a.e7)([c.Z], () => c.Z.getActiveInputProfile()),
        { enabledInputProfiles: n } = (0, u.G)({ location: "UserSettingsInputProfile" }),
        p = i.useCallback(
            (t) => {
                let { value: n } = t;
                s.Z.setActiveInputProfile(n, { analyticsLocations: e });
            },
            [e],
        ),
        h = [
            {
                value: d._.VOICE_ISOLATION,
                name: f.intl.string(f.t.cjPbpa),
                desc: f.intl.string(f.t.CzhvnJ),
            },
            {
                value: d._.STUDIO,
                name: f.intl.string(f.t.VZPR0d),
                desc: f.intl.string(f.t.ZaJksb),
            },
            {
                value: d._.CUSTOM,
                name: f.intl.string(f.t["N/PQjo"]),
                desc: f.intl.string(f.t.SnBmub),
            },
        ].filter((e) => {
            let { value: t } = e;
            return n.includes(t);
        });
    return (0, r.jsx)("div", {
        className: _.marginBottom20,
        children: (0, r.jsx)(o.E, {
            label: f.intl.string(f.t.LM3U3t),
            onChange: (e) => p({ value: e }),
            options: h,
            value: null != t ? t : d._.CUSTOM,
        }),
    });
}

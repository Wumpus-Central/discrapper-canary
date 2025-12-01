n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(906732),
    c = n(131951),
    u = n(846071),
    d = n(345655),
    f = n(388032),
    p = n(197571);
function _() {
    let { analyticsLocations: e } = (0, l.ZP)(),
        t = (0, a.e7)([c.Z], () => c.Z.getActiveInputProfile()),
        { enabledInputProfiles: n } = (0, u.G)({ location: "UserSettingsInputProfile" }),
        _ = i.useCallback(
            (t) => {
                let { value: n } = t;
                s.Z.setActiveInputProfile(n, { analyticsLocations: e });
            },
            [e],
        ),
        m = [
            {
                value: d._.VOICE_ISOLATION,
                name: f.intl.string(f.t.cjPbpT),
                desc: f.intl.string(f.t.CzhvnE),
            },
            {
                value: d._.STUDIO,
                name: f.intl.string(f.t.VZPR0R),
                desc: f.intl.string(f.t.ZaJksS),
            },
            {
                value: d._.CUSTOM,
                name: f.intl.string(f.t["N/PQjv"]),
                desc: f.intl.string(f.t.SnBmuY),
            },
        ].filter((e) => {
            let { value: t } = e;
            return n.includes(t);
        });
    return (0, r.jsx)("div", {
        className: p.marginBottom20,
        children: (0, r.jsx)(o.FXm, {
            label: f.intl.string(f.t.LM3U3k),
            onChange: (e) => _({ value: e }),
            options: m,
            value: null != t ? t : d._.CUSTOM,
        }),
    });
}

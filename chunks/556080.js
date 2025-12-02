n.d(e, { Z: () => T });
var i = n(442837),
    r = n(846027),
    l = n(100527),
    s = n(509613),
    u = n(131951),
    a = n(313789),
    o = n(846071),
    c = n(375258),
    d = n(345655),
    E = n(388032);
let S = (0, s.J9)(a.n.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => E.intl.string(E.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, o.P)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [E.intl.string(E.t.nuFtHH), E.intl.string(E.t.VZPR0R), E.intl.string(E.t.cjPbpT)],
        useValue: function () {
            return (0, i.e7)([u.Z], () => {
                var t;
                return null != (t = u.Z.getActiveInputProfile()) ? t : d._.CUSTOM;
            });
        },
        setValue: function (t) {
            let e = [l.Z.USER_SETTINGS_VOICE_AND_VIDEO];
            r.Z.setActiveInputProfile(t, { analyticsLocations: e });
        },
        useOptions: function () {
            let { enabledInputProfiles: t } = (0, o.G)({ location: "InputProfileCategory" });
            return [
                {
                    value: d._.VOICE_ISOLATION,
                    name: E.intl.string(E.t.cjPbpT),
                    desc: E.intl.string(E.t.CzhvnE),
                },
                {
                    value: d._.STUDIO,
                    name: E.intl.string(E.t.VZPR0R),
                    desc: E.intl.string(E.t.ZaJksS),
                },
                {
                    value: d._.CUSTOM,
                    name: E.intl.string(E.t["N/PQjv"]),
                    desc: E.intl.string(E.t.SnBmuY),
                },
            ].filter((e) => {
                let { value: n } = e;
                return t.includes(n);
            });
        },
    }),
    T = (0, s.k4)(a.n.VOICE_INPUT_PROFILE_CATEGORY, {
        buildLayout: () => [S, c.h],
    });

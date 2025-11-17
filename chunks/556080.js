n.d(e, { Z: () => d });
var i = n(442837),
    l = n(846027),
    u = n(100527),
    r = n(509613),
    s = n(131951),
    a = n(313789),
    o = n(846071),
    c = n(375258),
    E = n(345655),
    S = n(388032);
let T = (0, r.J9)(a.n.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => S.intl.string(S.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, o.P)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [S.intl.string(S.t.nuFtHH), S.intl.string(S.t.VZPR0R), S.intl.string(S.t.cjPbpT)],
        useValue: function () {
            return (0, i.e7)([s.Z], () => {
                var t;
                return null != (t = s.Z.getActiveInputProfile()) ? t : E._.CUSTOM;
            });
        },
        setValue: function (t) {
            let e = [u.Z.USER_SETTINGS_VOICE_AND_VIDEO];
            l.Z.setActiveInputProfile(t, { analyticsLocations: e });
        },
        useOptions: function () {
            let { enabledInputProfiles: t } = (0, o.G)({ location: "InputProfileCategory" });
            return [
                {
                    value: E._.VOICE_ISOLATION,
                    name: S.intl.string(S.t.cjPbpT),
                    desc: S.intl.string(S.t.CzhvnE),
                },
                {
                    value: E._.STUDIO,
                    name: S.intl.string(S.t.VZPR0R),
                    desc: S.intl.string(S.t.ZaJksS),
                },
                {
                    value: E._.CUSTOM,
                    name: S.intl.string(S.t["N/PQjv"]),
                    desc: S.intl.string(S.t.SnBmuY),
                },
            ].filter((e) => {
                let { value: n } = e;
                return t.includes(n);
            });
        },
    }),
    d = (0, r.k4)(a.n.VOICE_INPUT_PROFILE_CATEGORY, {
        buildLayout: () => [T, c.h],
    });

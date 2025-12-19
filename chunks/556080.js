n.d(e, { W: () => R });
var i = n(473749),
    l = n(442837),
    s = n(846027),
    u = n(100527),
    r = n(509613),
    a = n(970013),
    o = n(463395),
    T = n(131951),
    S = n(313789),
    c = n(846071),
    E = n(375258),
    d = n(383713),
    _ = n(782134),
    g = n(833682),
    I = n(815194),
    N = n(16009),
    A = n(387076),
    O = n(595373),
    C = n(345655),
    f = n(388032);
let P = (0, r.J9)(S.n.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => f.intl.string(f.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, c.P)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [f.intl.string(f.t.nuFtHH), f.intl.string(f.t.VZPR0R), f.intl.string(f.t.cjPbpT)],
        useValue: function () {
            return (0, l.e7)([T.Z], () => {
                var t;
                return null != (t = T.Z.getActiveInputProfile()) ? t : C._.CUSTOM;
            });
        },
        setValue: function (t) {
            let e = [u.Z.USER_SETTINGS_VOICE_AND_VIDEO];
            s.Z.setActiveInputProfile(t, { analyticsLocations: e });
        },
        useOptions: function () {
            let { enabledInputProfiles: t } = (0, c.G)({ location: "InputProfileCategory" });
            return [
                {
                    value: C._.VOICE_ISOLATION,
                    name: f.intl.string(f.t.cjPbpT),
                    desc: f.intl.string(f.t.CzhvnE),
                },
                {
                    value: C._.STUDIO,
                    name: f.intl.string(f.t.VZPR0R),
                    desc: f.intl.string(f.t.ZaJksS),
                },
                {
                    value: C._.CUSTOM,
                    name: f.intl.string(f.t["N/PQjv"]),
                    desc: f.intl.string(f.t.SnBmuY),
                },
            ].filter((e) => {
                let { value: n } = e;
                return t.includes(n);
            });
        },
    }),
    R = (0, r.k4)(S.n.VOICE_INPUT_PROFILE_CATEGORY, {
        useNotice: function () {
            let t = (0, l.e7)([o.Z, T.Z], () => {
                let t = T.Z.getInputDeviceId();
                return (
                    (o.Z.hasEchoCancellation(t) || o.Z.hasNoiseSuppression(t) || o.Z.hasAutomaticGainControl(t)) &&
                    T.Z.isInputProfileCustom()
                );
            });
            return i.useMemo(() => {
                if (t)
                    return {
                        type: a.v.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => f.intl.string(f.t["/Whuzi"]),
                    };
            }, [t]);
        },
        buildLayout: () => [P, _.q, g.L, d.A, O.Y, I.h, A.q, N.X, E.h],
    });

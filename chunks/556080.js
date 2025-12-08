n.d(e, { W: () => P });
var i = n(473749),
    l = n(442837),
    s = n(846027),
    r = n(100527),
    u = n(509613),
    a = n(970013),
    o = n(463395),
    c = n(131951),
    d = n(313789),
    T = n(846071),
    E = n(375258),
    S = n(383713),
    I = n(782134),
    g = n(833682),
    _ = n(815194),
    O = n(16009),
    N = n(387076),
    A = n(595373),
    f = n(345655),
    C = n(388032);
let L = (0, u.J9)(d.n.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => C.intl.string(C.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, T.P)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [C.intl.string(C.t.nuFtHH), C.intl.string(C.t.VZPR0R), C.intl.string(C.t.cjPbpT)],
        useValue: function () {
            return (0, l.e7)([c.Z], () => {
                var t;
                return null != (t = c.Z.getActiveInputProfile()) ? t : f._.CUSTOM;
            });
        },
        setValue: function (t) {
            let e = [r.Z.USER_SETTINGS_VOICE_AND_VIDEO];
            s.Z.setActiveInputProfile(t, { analyticsLocations: e });
        },
        useOptions: function () {
            let { enabledInputProfiles: t } = (0, T.G)({ location: "InputProfileCategory" });
            return [
                {
                    value: f._.VOICE_ISOLATION,
                    name: C.intl.string(C.t.cjPbpT),
                    desc: C.intl.string(C.t.CzhvnE),
                },
                {
                    value: f._.STUDIO,
                    name: C.intl.string(C.t.VZPR0R),
                    desc: C.intl.string(C.t.ZaJksS),
                },
                {
                    value: f._.CUSTOM,
                    name: C.intl.string(C.t["N/PQjv"]),
                    desc: C.intl.string(C.t.SnBmuY),
                },
            ].filter((e) => {
                let { value: n } = e;
                return t.includes(n);
            });
        },
    }),
    P = (0, u.k4)(d.n.VOICE_INPUT_PROFILE_CATEGORY, {
        useNotice: function () {
            let t = (0, l.e7)([o.Z, c.Z], () => {
                let t = c.Z.getInputDeviceId();
                return (
                    (o.Z.hasEchoCancellation(t) || o.Z.hasNoiseSuppression(t) || o.Z.hasAutomaticGainControl(t)) &&
                    c.Z.isInputProfileCustom()
                );
            });
            return i.useMemo(() => {
                if (t)
                    return {
                        type: a.v.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => C.intl.string(C.t["/Whuzi"]),
                    };
            }, [t]);
        },
        buildLayout: () => [L, I.q, g.L, S.A, A.Y, _.h, N.q, O.X, E.h],
    });

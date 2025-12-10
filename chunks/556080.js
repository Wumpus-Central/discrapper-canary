n.d(e, { W: () => L });
var i = n(473749),
    l = n(442837),
    s = n(846027),
    u = n(100527),
    r = n(509613),
    a = n(970013),
    o = n(463395),
    c = n(131951),
    d = n(313789),
    S = n(846071),
    T = n(375258),
    E = n(383713),
    g = n(782134),
    I = n(833682),
    _ = n(815194),
    O = n(16009),
    N = n(387076),
    A = n(595373),
    C = n(345655),
    f = n(388032);
let p = (0, r.J9)(d.n.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => f.intl.string(f.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, S.P)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [f.intl.string(f.t.nuFtHH), f.intl.string(f.t.VZPR0R), f.intl.string(f.t.cjPbpT)],
        useValue: function () {
            return (0, l.e7)([c.Z], () => {
                var t;
                return null != (t = c.Z.getActiveInputProfile()) ? t : C._.CUSTOM;
            });
        },
        setValue: function (t) {
            let e = [u.Z.USER_SETTINGS_VOICE_AND_VIDEO];
            s.Z.setActiveInputProfile(t, { analyticsLocations: e });
        },
        useOptions: function () {
            let { enabledInputProfiles: t } = (0, S.G)({ location: "InputProfileCategory" });
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
    L = (0, r.k4)(d.n.VOICE_INPUT_PROFILE_CATEGORY, {
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
                        useText: () => f.intl.string(f.t["/Whuzi"]),
                    };
            }, [t]);
        },
        buildLayout: () => [p, g.q, I.L, E.A, A.Y, _.h, N.q, O.X, T.h],
    });

n.d(e, { Z: () => L });
var i = n(473749),
    l = n(442837),
    s = n(846027),
    r = n(100527),
    u = n(509613),
    a = n(28682),
    o = n(463395),
    c = n(131951),
    d = n(313789),
    E = n(846071),
    S = n(375258),
    I = n(383713),
    T = n(782134),
    g = n(833682),
    _ = n(815194),
    O = n(16009),
    N = n(387076),
    A = n(595373),
    f = n(345655),
    Z = n(388032);
let C = (0, u.J9)(d.n.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => Z.intl.string(Z.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, E.P)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [Z.intl.string(Z.t.nuFtHH), Z.intl.string(Z.t.VZPR0R), Z.intl.string(Z.t.cjPbpT)],
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
            let { enabledInputProfiles: t } = (0, E.G)({ location: "InputProfileCategory" });
            return [
                {
                    value: f._.VOICE_ISOLATION,
                    name: Z.intl.string(Z.t.cjPbpT),
                    desc: Z.intl.string(Z.t.CzhvnE),
                },
                {
                    value: f._.STUDIO,
                    name: Z.intl.string(Z.t.VZPR0R),
                    desc: Z.intl.string(Z.t.ZaJksS),
                },
                {
                    value: f._.CUSTOM,
                    name: Z.intl.string(Z.t["N/PQjv"]),
                    desc: Z.intl.string(Z.t.SnBmuY),
                },
            ].filter((e) => {
                let { value: n } = e;
                return t.includes(n);
            });
        },
    }),
    L = (0, u.k4)(d.n.VOICE_INPUT_PROFILE_CATEGORY, {
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
                        type: a.y1.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => Z.intl.string(Z.t["/Whuzi"]),
                    };
            }, [t]);
        },
        buildLayout: () => [C, T.Z, g.Z, I.Z, A.Z, _.Z, N.Z, O.Z, S.h],
    });
